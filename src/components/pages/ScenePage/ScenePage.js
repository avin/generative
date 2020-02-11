import React from 'react';
import canvasSketch from 'canvas-sketch';
import LoadingPage from '@/components/common/LoadingPage/LoadingPage';
import styles from './styles.module.scss';

class ScenePage extends React.Component {
  state = {
    isReady: false,
  };

  static defaultProps = {
    unreleased: false,
  };

  sketchManagerRef = React.createRef();

  canvasRef = React.createRef();

  containerRef = React.createRef();

  async loadSketch() {
    this.setState({ isReady: false });

    const {
      unreleased,
      match: {
        params: { id },
      },
    } = this.props;

    let sketchModule;
    if(unreleased){
      sketchModule = await import(`../../../unreleased/${id}`);
    } else {
      sketchModule = await import(`../../../sketches/${id}`);
    }


    const { sketch, settings } = sketchModule.default;

    const sketchSettings = {
      ...settings,
      canvas: this.canvasRef.current,
    };

    if (!sketchSettings.dimensions) {
      sketchSettings.scaleToFit = true;
    }

    this.sketchManagerRef.current = await canvasSketch(sketch, sketchSettings);

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
      <div className={styles.container} ref={this.containerRef}>
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

export default ScenePage;
