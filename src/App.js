import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Container from './components/Container';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PortfolioPage from './pages/Portfolio';
import ResumePage from './pages/Resume'
import ContactPage from './pages/Contact'


function App() {
  return (
    <Router>
      <Navbar />
        <Container>
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/about" component={ AboutPage } />
          <Route exact path="/portfolio" component={ PortfolioPage } />
          <Route exact path="/resume" component={ ResumePage } />
          <Route exact path="/contact" component={ ContactPage } />
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
