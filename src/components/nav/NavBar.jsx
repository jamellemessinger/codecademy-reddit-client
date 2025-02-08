import React from 'react';
import css from '../../css/NavBar.module.css';

export default function NavBar() {
  return (
    <div className={css.navbar}>
      <div className={css.logo}>
        <img src="/logo.png" alt="logo" />
        <h1>Reddit Minimal</h1>
      </div>
      <div className={css.search}>
        <input type="text" placeholder="Search" />
        <button>Search logo here</button>
      </div>
    </div>
  );
}
