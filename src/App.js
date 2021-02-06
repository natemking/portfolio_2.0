import React, { Suspense, lazy  } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContainer from './components/MainContainer';
import Loading from "./components/Loading";

const HomePage = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/About'));
const PortfolioPage = lazy(() => import('./pages/Portfolio'));
const ResumePage = lazy(() => import('./pages/Resume'));
const ContactPage = lazy(() => import('./pages/Contact'));

function App() {
  
  return (
    <Router>
      <Navbar />
        <MainContainer>
          <Suspense fallback={ <Loading /> }>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/about" component={ AboutPage } />
            <Route exact path="/portfolio" component={ PortfolioPage } />
            <Route exact path="/resume" component={ ResumePage } />
            <Route exact path="/contact" component={ ContactPage } />
          </Suspense>
        </MainContainer>
      <Footer />
    </Router>
  );
}

export default App;
