import React from 'react';
import css from '../../css/Card.module.css';

export default function Card() {
  return (
    <div className={css.card}>
      <div className={css.karma}>
        <p>Karma visual here</p>
      </div>
    <div className={css.main}>
        <div className={css.userContent}>
          <h3>Card Title</h3>
          <img src="./assests/placeholder.png" alt="users posted content" />
        </div>
        <div className={css.contentMetadata}>
          <div className="user">
            <img
              src="./assests/placeholder.png"
              alt="username profile picture"
            />
            <p>username</p>
          </div>
          <p>time passed</p>
          <div className="comments">
            <img src="./assests/placeholder.png" alt="comment icon" />
            <p>number of comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
