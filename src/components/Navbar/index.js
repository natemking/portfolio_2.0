import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../../index.css';
import './style.css'



function Navbar() {
    // State for window hash
    const [hash, setHash] = useState(window.location.hash);
    
    // Life cycle to set state to hash of current window
    useEffect(() => {
        window.addEventListener('hashchange', () => {
           setHash(window.location.hash);
        })
    }, []);

    // Render nave bar and make the current pages nav tab active
    return (
        <nav className="navbar navbar-expand navbar-light">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link home">
                            NMK
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" key={Date.now()} className={ hash === '#/about' ? "nav-link active" : "nav-link"}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" key={Date.now()} className={hash === '#/portfolio' ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" key={Date.now()}  className={hash === '#/resume' ? "nav-link active" : "nav-link"}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
