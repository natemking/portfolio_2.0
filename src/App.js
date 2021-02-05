import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';


function App() {
  return (
    <Router>
      <Navbar />
        <Container />
      <Footer />
    </Router>
  );
}

export default App;
