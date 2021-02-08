import React from 'react';
import FadeIn from '../utils/FadeIn'
import ResumeContainer from '../components/ResumeContainer';


const Resume = () => {
    return (
        // Render resume w/ Fade in effect
        <FadeIn delay={250} duration={450}>
            <ResumeContainer />
        </FadeIn>
    );
}
 
export default Resume;