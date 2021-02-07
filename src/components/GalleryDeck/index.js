import React from 'react';

const GalleryDeck = ({ id, img, alt, onClick }) => {
    
    return (
        <section className='col-2'>
            <img src={ img.default } alt= { alt } id={ id } className='img-fluid' onClick={ onClick }/>
        </section>
    );
}
 
export default GalleryDeck;