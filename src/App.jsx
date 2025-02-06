import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Subreddits from './components/Subreddits';
import Cards from './components/cards/Cards';

function App() {
  return (
    <>
      <NavBar />
      <Cards />
      <Subreddits />
    </>
  );
}

export default App;
