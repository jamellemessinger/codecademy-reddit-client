import React from 'react';
import css from '../../css/quickNav.module.css';

export default function NavToTop() {
  return (
    <div className={css.navToTop}>
      <a href="#top">
        <div>Home</div>
      </a>
    </div>
  );
}
