import React from 'react';
import PropTypes from 'prop-types';
import Header from '@/components/layouts/MainLayout/Header/Header';
import styles from './styles.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
