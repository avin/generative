import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import { ReactComponent as LogoIcon } from './logo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.headerTitle}>
        <LogoIcon className={styles.logo} /> <span className={styles.title}>Creative experiments</span>{' '}
        <span className={styles.name}>by Avin Grape</span>
      </Link>

      <div className={styles.contacts}>
        <a target="_blank" rel="noopener noreferrer" href="mailto:avin.github@gmail.com">
          Email
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lambrero">
          Twitter
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/avin/generative">
          GitHub
        </a>
      </div>
    </div>
  );
};
Header.propTypes = {};

export default Header;
