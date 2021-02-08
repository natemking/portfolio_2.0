import React from 'react';
import bgImage from './nate-in-smoke.jpg';

const MainImage = () => {
    // Render main bg image
    return (
        <img className="wrapper__img" src={ bgImage } alt="nate in smoke"></img>
     );
}
 
export default MainImage;