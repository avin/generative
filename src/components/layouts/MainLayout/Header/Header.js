import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">Generative demos by Avin Grape</Link>
    </div>
  );
};
Header.propTypes = {};

export default Header;
