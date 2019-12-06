import React from 'react';
import Carousel from './Carousel';
import logo from './logo.svg';
import './App.css';
import SWMovies from './SWMovies';

function App() {
  return (
    <div className="App">
      <Carousel />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>El Instituto Mexicano del Cemento y del Concreto A.C.</p>
        <p>Les Desea</p>
        <h1>Feliz Navidad y un Próspero 2020</h1>
      </header>
    </div>
  );
}

export default App;
