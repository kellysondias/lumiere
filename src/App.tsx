import React from 'react';
import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Movies } from './components/movies/movies';

function App() {
  return (
    <>
      <Header />
      <Movies />
      <Footer />
    </>
  );
}

export default App;