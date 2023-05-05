import './Mountain.css';
//import { Parallax } from 'react-parallax';
import hafez1 from './images/hafez1.jpg';
import mountain from './images/mountain.png';
import hill from './images/hill.png';

function Mountain() {
  return (
    <div className="parallax-container">
        <div className="content">
            <header className="header-main">
                <div className="layers">
                    <div className="layer-head">
                        <h1 className="title">McGill Iranian Student Association</h1>
                    </div>
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