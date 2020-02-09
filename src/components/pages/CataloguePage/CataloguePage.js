import React from 'react';
import config from '@/config';
import CatalogueItem from '@/components/pages/CataloguePage/CatalogueItem/CatalogueItem';
import styles from './styles.module.scss';

const scenes = config.scenes.reverse();

const CataloguePage = () => {
  return (
    <div className={styles.catalogue}>
      {scenes.map(({ id }) => (
        <CatalogueItem sceneId={id} key={id} />
      ))}
    </div>
  );
};
CataloguePage.propTypes = {};

export default CataloguePage;
