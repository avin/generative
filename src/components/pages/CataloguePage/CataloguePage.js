import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import config from '@/config';
import CatalogueItem from '@/components/pages/CataloguePage/CatalogueItem/CatalogueItem';
import { setUiSettingsValues } from '@/redux/modules/uiSettings/actions';
import styles from './styles.module.scss';

const scenes = config.scenes.reverse();

const CataloguePage = () => {
  const dispatch = useDispatch();
  const catalogueScrollPosition = useSelector(state => state.uiSettings.catalogueScrollPosition);

  useEffect(() => {
    document.documentElement.scrollTop = catalogueScrollPosition;

    return () => {
      dispatch(setUiSettingsValues({ catalogueScrollPosition: document.documentElement.scrollTop }));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
