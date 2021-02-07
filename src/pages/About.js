import React from 'react';
import FadeIn from '../utils/FadeIn'
import About from '../components/About';

const AboutPage = () => {
    return ( 
        <FadeIn delay={250} duration={450}>
            <About />
        </FadeIn>
    );
}
 
export default AboutPage;