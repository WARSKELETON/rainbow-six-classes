import React from 'react';
import logo from './logo.svg';
import jager from './jager.png';
import './App.css';
import * as Vibrant from 'node-vibrant';

function App() {
  // Using builder
  Vibrant.from(jager).getPalette((err, palette) => console.log(palette))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
