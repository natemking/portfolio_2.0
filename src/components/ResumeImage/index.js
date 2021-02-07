import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ResumeImage = (props) => {
    
    return ( 
        <section>
            <LazyLoadImage
                alt="Nate M Kings resume"
                effect="blur"
                src={ props.page } />
        </section>
    );
}
 
export default ResumeImage;