import React from 'react';
import canvasSketch from 'canvas-sketch';
import LoadingPage from '@/components/common/LoadingPage/LoadingPage';
import styles from './styles.module.scss';

class ScenePage extends React.Component {
  state = {
    isReady: false,
  };

  sketchManagerRef = React.createRef();

  canvasRef = React.createRef();

  async loadSketch() {
    this.setState({ isReady: false });

    const {
      match: {
        params: { id },
      },
    } = this.props;

    const sketchModule = await import(`../../../sketches/${id}`);

    const { sketch, settings } = sketchModule.default;

    this.sketchManagerRef.current = await canvasSketch(sketch, {
      ...settings,
      canvas: this.canvasRef.current,
    });

    this.setState({ isReady: true });
  }

  unloadSketch() {
    if (this.sketchManagerRef.current) {
      this.sketchManagerRef.current.unload();
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.unloadSketch();
      this.loadSketch();
    }
  }

  componentDidMount() {
    this.loadSketch();
  }

  componentWillUnmount() {
    this.unloadSketch();
  }

  render() {
    const { isReady } = this.state;

    return (
      <div className={styles.container}>
        <canvas ref={this.canvasRef} className={styles.canvas} />
        {!isReady && (
          <div className={styles.loadingContainer}>
            <LoadingPage />
          </div>
        )}
      </div>
    );
  }
}

// const ScenePage = () => {
//   const { id } = useParams();
//   const canvasRef = useRef(null);
//   const prevIdRef = useRef(null);
//   const sketchManagerRef = useRef(null);
//   const [isReady, setIsReady] = useState(false);
//   const [isSomethingWrong, setIsSomethingWrong] = useState(false);
//
//   // Когда меняет ID сцены - убиваем старую сцену и показываем лоадер
//   useEffect(() => {
//     console.log('FIRE');
//     setIsReady(false);
//
//     return () => {
//       if (sketchManagerRef.current) {
//         console.log('DESTROY');
//         sketchManagerRef.current.unload();
//         sketchManagerRef.current = null;
//       }
//     };
//   }, [id]);
//
//   if (isSomethingWrong) {
//     return <div> Something wrong :( </div>;
//   }
// };
// ScenePage.propTypes = {};

export default ScenePage;
