import React from 'react';
import { useRef } from "react";
import './Navbar.css';
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


/* this is the CSS for navbar, but it fucks up the rest so keep it here for now

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

header{
    display: flex;
    align-items: end;
    justify-content: space-between;
    height: 80px;
    padding: 0 2rem;
    background-color: burlywood;
    color: black;
}

nav a{
    margin: 0 2rem;
    color: black;
    text-decoration: none;
}

nav a:hover{
    color: grey;
}

header .nav-btn {
    padding: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    visibility: hidden;
    opacity: 0;
}

@media only screen and (max-width: 1024px){
    header .nav-btn{
        visibility: visible;
        opacity: 1;
    }

    header nav{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:end;
        gap: 1.5rem;
        background-color: burlywood;
        transition: 1s;
        transform: translateY(-100vh);
    }

    header .responsive_nav{
        transform: none;
    }

    nav .nav-close-btn{
        position: absolute;
        top: 2rem;
        right: 2rem;
    }
}


*/