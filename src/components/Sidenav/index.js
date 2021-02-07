import React from 'react';
import { Link } from "react-router-dom";

import './style.css';
import '../../index.css';


const Sidenav = () => {
    return (
        <nav className="sidenav">
            <a href="https://github.com/natemking" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/natemking/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
            </a>
            <Link to="/contact">
                <i className="far fa-envelope"></i>
            </Link>
        </nav>
    );
}
 
export default Sidenav;