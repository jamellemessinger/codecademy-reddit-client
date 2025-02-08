import './css/App.css';
import React from 'react';
import NavBar from './components/nav/NavBar';
import Subreddits from './components/Subreddits';
import Cards from './components/cards/Cards';
import NavToTop from './components/nav/NavToTop';
import NavToBottom from './components/nav/NavToBottom';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Cards />
        <Subreddits />
        <NavToTop />
        <NavToBottom />
      </div>
    </>
  );
}

export default App;
