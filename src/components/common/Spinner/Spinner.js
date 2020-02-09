import React from 'react';
import PropTypes from 'prop-types';
import cn from 'clsx';
import styles from './styles.module.scss';

const colors = {
  red: '#000',
  gray: '#ddd',
};

const R = 45;
const SPINNER_TRACK = `M 50,50 m 0,-${R} a ${R},${R} 0 1 1 0,${R * 2} a ${R},${R} 0 1 1 0,-${R * 2}`;
const PATH_LENGTH = 280;

const MIN_SIZE = 10;
const STROKE_WIDTH = 4;
const MIN_STROKE_WIDTH = 16;

const getViewBox = strokeWidth => {
  const radius = R + strokeWidth / 2;
  const viewBoxX = (50 - radius).toFixed(2);
  const viewBoxWidth = (radius * 2).toFixed(2);
  return `${viewBoxX} ${viewBoxX} ${viewBoxWidth} ${viewBoxWidth}`;
};

const Spinner = ({ size = 50, headColor = colors.red, trackColor = colors.gray, className }) => {
  size = Math.max(MIN_SIZE, size);

  const strokeWidth = Math.min(MIN_STROKE_WIDTH, (STROKE_WIDTH * 100) / size);
  const strokeOffset = PATH_LENGTH - PATH_LENGTH * 0.25;

  return (
    <div className={cn(styles.spinner, className)}>
      <div className={styles.spinnerAnimation}>
        <svg width={size} height={size} strokeWidth={strokeWidth.toFixed(2)} viewBox={getViewBox(strokeWidth)}>
          <path className={styles.spinnerTrack} d={SPINNER_TRACK} stroke={trackColor} />
          <path
            className={styles.spinnerHead}
            d={SPINNER_TRACK}
            pathLength={PATH_LENGTH}
            strokeDasharray={`${PATH_LENGTH} ${PATH_LENGTH}`}
            strokeDashoffset={strokeOffset}
            stroke={headColor}
          />
        </svg>
      </div>
    </div>
  );
};
Spinner.protoTypes = {
  /** Размер круга */
  size: PropTypes.number,

  /** Цвет активного вращающегося элемента */
  headColor: PropTypes.string,

  /** Цвет круга (трека вращения) */
  trackColor: PropTypes.string,
};

export default Spinner;
