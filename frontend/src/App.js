import React from 'react';
import { AppProvider } from "./context";
import './App.css';
import styled from "styled-components";
import OperatorCard from "./components/OperatorCard";

function App() {
  return (
    <AppProvider>
      <AppWrapper>
        <Header>
          <h1>R6 Classes <span role="img" aria-label="Folder">📁</span></h1>
        </Header>
        <Content>
          <OperatorCard />
        </Content>
      </AppWrapper>
    </AppProvider>
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
