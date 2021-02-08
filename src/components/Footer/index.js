import React from 'react';
import './style.css'

const Footer = () => {
    //Render footer
    return ( 
        <footer className="footer">
                <span className="text-muted"> &copy;2021 NMK / Photo by
                    <a href="https://www.benwentzel.net/" target="_blank" rel="noreferrer"> Ben Wentzel</a>
                </span>
        </footer>
    );
}
 
export default Footer;