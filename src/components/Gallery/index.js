import React, { useState } from 'react';
import './style.css'
import work from '../../utils/work'
import GalleryJumbo from '../GalleryJumbo';
import GalleryDeck from '../GalleryDeck';


const Gallery = () => {

    const [ selectedWork, setSelectedWork ] = useState({
        img: '',
        alt: '',
        name: '',
        desc: '',
        tools: '',
        url: '',
        gitHub: '',
        about: false
    })

    const handleClickEvent = (e) => {
        
        let userPick = work.filter(work => (
            work.id.toString() === e.target.id
        ));

        setSelectedWork({
            img: userPick[0].img,
            alt: userPick[0].alt,
            name: userPick[0].name,
            desc: userPick[0].desc,
            tools: userPick[0].tools,
            url: userPick[0].url,
            gitHub: userPick[0].gitHub,
            about: true
        })
    }

    // Map all works and send to gallery deck for display
    const deck= work.map(work => (
        <GalleryDeck key={ work.id } id={ work.id } img={ work.img } alt={ work.alt } onClick={ handleClickEvent }/>
    ))

    return (
        <section className='container col-9 mt-3 gallery'>
            <h3>Work.</h3>
            <GalleryJumbo state={selectedWork} />

            <section className='row mt-5 gallery__deck justify-content-around'>
            { deck }
            </section>
        </section>
    );
}
 
export default Gallery;