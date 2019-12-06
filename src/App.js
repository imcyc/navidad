import React from 'react';
import Carousel from './Carousel';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Carousel />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
