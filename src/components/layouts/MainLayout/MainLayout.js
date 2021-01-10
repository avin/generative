import React from 'react';
import cn from 'clsx';
import PropTypes from 'prop-types';
import Header from '@/components/layouts/MainLayout/Header/Header';
import styles from './styles.module.scss';

const MainLayout = ({ children }) => {
  let noHeader = window.location.href.includes('noheader');
  console.log(noHeader);

  return (
    <div className={styles.layout}>
      {!noHeader && <Header />}
      <div className={cn(styles.content, {[styles.noHeader]: noHeader})}>{children}</div>
    </div>
  );
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
