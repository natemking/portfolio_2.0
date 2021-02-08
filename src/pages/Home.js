import React from 'react';
import FadeIn from '../utils/FadeIn'
import Home from '../components/Home';

const HomePage = () => {
    return ( 
        // Render home page with fade in effect
        <FadeIn delay={250} duration={450}>
            <Home />
        </FadeIn>
    );
}
 
export default HomePage;