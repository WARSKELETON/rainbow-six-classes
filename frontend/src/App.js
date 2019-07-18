import React from 'react';
import { AppProvider } from "./context";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import styled from "styled-components";
import OperatorList from "./components/OperatorList";
import OperatorCard from "./components/OperatorCard";

function App() {
  return (
    <AppProvider>
      <AppWrapper>
        <Header>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <h1>R6 Classes <span role="img" aria-label="Folder">📁</span></h1>
          </Link>
        </Header>
        <Content>
          <Switch>
            <Route exact={true} path="/class/:handler" component={OperatorCard} />
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

  a {
    color: var(--mainBlack);
  }
`

const Content = styled.div`
  grid-area: content;
`
