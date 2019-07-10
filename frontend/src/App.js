import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import OperatorCard from "./components/OperatorCard";

function App() {
  return (
    <AppWrapper>
      <Header>
        <h1>R6 Classes 📁</h1>
      </Header>
      <Content>
        <OperatorCard />
      </Content>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
        ". header ."
        ". content .";
`

const Header = styled.div`
  grid-area: header;
`

const Content = styled.div`
  grid-area: content;
`

const Text = styled.p`
  color: white;
`
