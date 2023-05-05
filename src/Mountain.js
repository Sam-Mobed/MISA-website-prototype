import './Mountain.css';
//import { Parallax } from 'react-parallax';
import hafez1 from './images/hafez1.jpg';
import mountain from './images/mountain.png';
import hill from './images/hill.png';
import { useEffect } from 'react';

function Mountain() {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let scrollY = window.scrollY;
            document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
        });
    }, []);

    return (
    <div className="parallax-container">
        <div className="content">
            <header className="header-main">
                <div className="layers">
                    <div className="layer-head">
                        <h1 className="title">McGill Iranian Student Association</h1>
                    </div>
                    <div className="img-layer layer-base" style={{backgroundImage: `url(${hafez1})`, backgroundSize: "100% auto",}}></div>
                    <div className="img-layer layer-mid" style={{backgroundImage: `url(${mountain})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat", bottom:"0",}}></div>
                    <div className="img-layer layer-front" style={{backgroundImage: `url(${hill})`, backgroundSize: "100% auto", backgroundRepeat: "no-repeat",}}></div>
                </div>
            </header>
        </div>
    </div>
    );
}
//<h1 class="site-title">McGill Iranian Student Association</h1>
export default Mountain;

/* 

<div className="parallax-layer layer-1">
            <Parallax strength={100} bgImage={hafez1}></Parallax>
        </div>
        <div className="parallax-layer layer-2">
            <Parallax strength={300} bgImage={mountain}></Parallax>
        </div>
        <div className="parallax-layer layer-3">
            <Parallax strength={600} bgImage={hill}></Parallax>
        </div>


*/