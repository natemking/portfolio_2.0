import React from "react";
import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/about" className={ window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link" }>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className={window.location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
