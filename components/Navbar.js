import React from 'react';
import Link from 'next/link';
import navStyles from '../src/styles/Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
