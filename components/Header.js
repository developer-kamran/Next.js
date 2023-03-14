import React from 'react';
import headerStyles from '../src/styles/Header.module.css';

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>WebDev News</h1>
      <h3>Keep you code simple and upto date!</h3>
    </header>
  );
};

export default Header;
