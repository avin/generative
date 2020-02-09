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

  containerRef = React.createRef();

  async loadSketch() {
    this.setState({ isReady: false });

    const {
      match: {
        params: { id },
      },
    } = this.props;

    const sketchModule = await import(`../../../sketches/${id}`);

    const { sketch, settings } = sketchModule.default;

    let { dimensions } = settings;
    if (!dimensions) {
      const containerEl = this.containerRef.current;
      dimensions = [containerEl.clientWidth, containerEl.clientHeight];
    }

    this.sketchManagerRef.current = await canvasSketch(sketch, {
      ...settings,
      dimensions,
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
