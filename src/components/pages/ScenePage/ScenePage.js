import React from 'react';
import canvasSketch from 'canvas-sketch';
import Stats from 'stats.js';
import LoadingPage from '@/components/common/LoadingPage/LoadingPage';
import styles from './styles.module.scss';

const stats = new Stats();
stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
stats.dom.style.position = 'initial';

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
    if (unreleased) {
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
      // sketchSettings.canvasWidth = this.containerRef.current.scrollWidth;
      // sketchSettings.canvasHeight = this.containerRef.current.scrollHeight;

      sketchSettings.styleCanvas = false;
    }

    this.sketchManagerRef.current = await canvasSketch(sketch, sketchSettings);

    const origRender = this.sketchManagerRef.current.sketch.render;
    this.sketchManagerRef.current.sketch.render = (params) => {
      stats.begin();

      origRender(params);

      stats.end();
    };

    this.setState({ isReady: true });

    return this.sketchManagerRef.current.sketch;
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

  async componentDidMount() {
    const fps = window.location.href.includes('fps');
    if (fps) {
      document.querySelector('#debugger').appendChild(stats.dom);
    }

    await this.loadSketch();
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
        <div id="debugger" className={styles.debugger} />
      </div>
    );
  }
}

export default ScenePage;
