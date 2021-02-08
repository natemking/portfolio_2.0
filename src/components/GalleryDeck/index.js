import React from 'react';

const GalleryDeck = ({ id, img, alt, onClick }) => {
    // Render the gallery deck
    return (
        <section className='col-lg-2 mt-4'>
            <img src={ img.default } alt= { alt } id={ id } className='img-fluid' onClick={ onClick }/>
        </section>
    );
}
 
export default GalleryDeck;