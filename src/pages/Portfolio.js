import React from 'react';
import FadeIn from '../utils/FadeIn'
import Gallery from '../components/Gallery'

const Portfolio = () => {
    return (
        <FadeIn delay={250} duration={450}>
            <Gallery />
        </FadeIn>
    );
}
 
export default Portfolio;