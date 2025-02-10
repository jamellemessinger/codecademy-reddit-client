import React from 'react';
import css from '../../css/quickNav.module.css';

export default function NavToBottom() {
  return (
    <div className={css.navToBottom}>
      <a href="#bottom">
        <div>End</div>
      </a>
    </div>
  );
}
