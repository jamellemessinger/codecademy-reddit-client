import React from 'react';

export default function Card() {
  return (
    <div className="card">
      <div className="karma">
        <p>Karma visual here</p>
      </div>
      <div className="main">
        <div className="user-content">
          <h3>Card Title</h3>
          <img src="./assests/placeholder.png" alt="users posted content" />
        </div>
        <div className="content-metadata">
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
