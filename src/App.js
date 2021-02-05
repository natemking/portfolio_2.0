import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Route } from 'react-router-dom';
import bgImage from './nate-in-smoke.jpg';
import './App.css'

function App() {
  return (
    <>
      <img id="bg" src={ bgImage } alt="nate in smoke"></img>
      <Router>
        <Navbar />
      </Router>
    </>
  );
}

export default App;
