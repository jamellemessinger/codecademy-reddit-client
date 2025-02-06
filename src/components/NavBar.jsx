import React from 'react';

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <h1>Reddit Minimal</h1>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button>Search logo here</button>
      </div>
    </div>
  );
}
