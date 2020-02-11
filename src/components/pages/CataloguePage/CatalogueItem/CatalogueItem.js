import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const CatalogueItem = ({ sceneId }) => {
  return (
    <div className={styles.itemContainer}>
      <Link to={`/scene/${sceneId}`}>
        <img src={`static/assets/preview/${sceneId}_sm.jpg`} alt={sceneId} className={styles.image}/>
      </Link>
    </div>
  );
};
CatalogueItem.propTypes = {
  sceneId: PropTypes.string.isRequired,
};

export default CatalogueItem;
