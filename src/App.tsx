import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from '../src/pages/routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    text-decoration: none;
  }
  

  html {
    font-size: 62.5%;
    background-color: theme.background;
    color: theme.color;
    margin: 0 auto;
  }

  body {
    font-family: 'Roboto', monospace;
    background-color: #000;
    color: #fff;
  }

  a,
  a:hover {
    text-decoration: none;
    color: #fff;
  }

  ol, ul {
    list-style: none;
  }
`

export default App;