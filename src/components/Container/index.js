import React from 'react';
import './style.css';
import bgImage from './nate-in-smoke.jpg';



const Container = (props) => {
    return ( 
        <main className="wrapper">
            <img id="bg" src={bgImage} alt="nate in smoke"></img>
            {props.children}
        </main>
     );
}
 
export default Container;