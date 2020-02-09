import React from 'react';
import config from '@/config';
import CatalogueItem from '@/components/pages/CataloguePage/CatalogueItem/CatalogueItem';
import styles from './styles.module.scss';

const CataloguePage = () => {
  return (
    <div className={styles.catalogue}>
      {config.scenes.map(({ id }) => {
        return <CatalogueItem sceneId={id} />;
      })}
    </div>
  );
};
CataloguePage.propTypes = {};

export default CataloguePage;
