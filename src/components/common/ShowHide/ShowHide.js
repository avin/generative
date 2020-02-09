import React from 'react';
import cn from 'clsx';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ShowHide = ({ keepElement, show, children, inline }) => {
  if (keepElement) {
    return (
      <div className={cn(styles.container, { [styles.hidden]: keepElement, [styles.inline]: inline })}>{children}</div>
    );
  }

  if (!show) {
    return null;
  }

  return <div className={styles.container}>{children}</div>;
};
ShowHide.protoTypes = {
  /** Скрывать через CSS сохраняя элемент в DOM дереве */
  keepElement: PropTypes.bool,
  /** Переключатель показа элемента */
  show: PropTypes.bool,
  inline: PropTypes.bool,
};

export default ShowHide;
