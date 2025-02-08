import './css/App.css';
import React from 'react';
import NavBar from './components/nav/NavBar';
import Subreddits from './components/Subreddits';
import Cards from './components/cards/Cards';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Cards />
        <Subreddits />
      </div>
    </>
  );
}

export default App;
