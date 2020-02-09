import React from 'react';
import Spinner from '@/components/common/Spinner/Spinner';
import styles from './styles.module.scss';

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage} data-testid="loading-page">
      <Spinner size={60} />
    </div>
  );
};

export default LoadingPage;
