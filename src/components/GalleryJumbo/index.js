import React from 'react';
import '../../index.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryJumbo = ({ state }) => {
    const { gif, alt, name, desc, tools, url, gitHub, about } = state
    // Render the gallery as per users choice. Lazy load the jumbo w/ a blur effect
    return (
        <section className='row mt-3' style={about ? { display: 'flex' } : { display: 'none' }}>

            <section className='col-lg-8 mt-5'>
                <LazyLoadImage
                    src={gif.default}
                    alt={ alt }
                    key={Date.now()}
                    className='img-fluid'
                    effect='blur'
                />
            </section>
            
            <section className='col-lg-4 gallery__jumbo-text' >
                <h4 className='text-right'>{ name }</h4>
                <hr />
                <h5>About.</h5>
                <p>{ desc }</p>
                <hr />
                <h5>Tools.</h5>
                <p>{ tools }</p>
                <hr />
                <p><a href={ url } target='_blank' rel='noreferrer'>Deploy</a></p>
                <p><a href={gitHub} target='_blank' rel='noreferrer'>Git Repo</a></p>
            </section>
        </section>
    );
}
 
export default GalleryJumbo;