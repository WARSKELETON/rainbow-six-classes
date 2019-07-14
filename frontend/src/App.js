import React from 'react';
import { AppProvider } from "./context";
import './App.css';
import styled from "styled-components";
import OperatorCard from "./components/OperatorCard";
import OperatorList from "./components/OperatorList";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <AppWrapper>
        <Header>
          <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
            <h1>R6 Classes <span role="img" aria-label="Folder">📁</span></h1>
          </Link>
        </Header>
        <Content>
          <Switch>
            <Route exact={true} path="/:handle" component={OperatorCard} />
            <Route exact={true} path="/" component={OperatorList} />
          </Switch>
        </Content>
      </AppWrapper>
    </AppProvider>
  );
}

export default App;

const AppWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 400px 1fr;
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
