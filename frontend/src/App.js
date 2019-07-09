import React, { useState } from 'react';
import logo from './logo.svg';
import jager from './jager.png';
import './App.css';
import * as Vibrant from 'node-vibrant';
import styled from "styled-components";
import { lighten } from 'polished';

function App() {
  const [ola, setola] = useState("")
  Vibrant.from(jager).getPalette((err, palette) => setola(palette.Vibrant.hex))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text color={ola}>
          Hello World!
        </Text>
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

const Text = styled.p`
  color: ${props => props.color && lighten(0.2, props.color)};
`
