import React from 'react';
import { useRef } from "react";
import './styles/Navbar.css';
import X from './images/X.png';
import hamburger from './images/hamburger.png';

function Navbar(){
    const navRef = useRef();

    //need to have something similar to mountain, that keeps track of yaxis,
    //and sets transparency of the navbar. it should be invisible when we are completely at the top
    //the navbar should be 1.fixed at the top of window, 2.invis->visible, 3.adapts to window size

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header className="nav-container">
            <h3>MISA</h3>
            <nav>
                <a href="/#">sec1</a>
                <a href="/#">sec2</a>
                <a href="/#">sec3</a>
                <a href="/#">sec4</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <img className="button-img" src={X} alt="close"></img>
                </button>
            </nav>

            <button className="nav-btn nav-show-btn" onClick={showNavbar}>
                <img className="button-img" src={hamburger} alt="show content"></img>
            </button>
        </header>
    );
}

export default Navbar;