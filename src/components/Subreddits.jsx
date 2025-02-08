import React from 'react';
import css from '../css/Subreddits.module.css';

export default function Subreddits() {
  return (
    <div className={css.subreddits}>
      <h2>Subreddits</h2>
      <ul>
        <li>Subreddit 1</li>
        <li>Subreddit 2</li>
        <li>Subreddit 3</li>
      </ul>
    </div>
  );
}
