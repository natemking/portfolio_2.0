import React from 'react';
import './style.css';
import bgImage from './nate-in-smoke.jpg';
import Sidenav from '../Sidenav';



const Container = (props) => {
    return ( 
        <main className="wrapper">
            <img className="wrapper__img" src={bgImage} alt="nate in smoke"></img>
            {props.children}
            <Sidenav />
        </main>
     );
}
 
export default Container;