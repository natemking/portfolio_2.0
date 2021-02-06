import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume'
import Contact from './pages/Contact'


function App() {
  return (
    <Router>
      <Navbar />
        <Container>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/portfolio" component={ Portfolio } />
          <Route exact path="/resume" component={ Resume } />
          <Route exact path="/contact" component={ Contact } />
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
