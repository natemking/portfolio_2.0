import React from 'react';
import FadeIn from '../utils/FadeIn'
import Home from '../components/Home';

const HomePage = () => {
    return ( 
        <FadeIn delay={250} duration={450}>
            <Home />
        </FadeIn>
    );
}
 
export default HomePage;