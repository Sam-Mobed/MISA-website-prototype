import './Title.css';
import cloud from './images/cloud.png';
import blue_clouds from './images/Blue_Clouds.png';
import hanging_plants from './images/plant_corner.png';

function Title() {

    

    return (
        <div className="title-container">
            <div className="row1">
                <div className="img cloud" style={{backgroundImage: `url(${cloud})`,}}></div>
                <div className="img blue_clouds" style={{backgroundImage: `url(${blue_clouds})`,}}></div>
                <div className="img hanging_platns" style={{backgroundImage: `url(${hanging_plants})`,}}></div>
            </div>
            <div className="row2">
                <h1 className="title">McGill Iranian Student Association</h1>
            </div>
            <div className="row3"></div>
            
            
        </div>
        
    );
}

export default Title;

/* 
<div className="img layer-base" style={{backgroundImage: `url(${hafez})`, backgroundSize: "100%",}}></div>
            <div className="img layer-base" style={{backgroundImage: `url(${hafez})`, backgroundSize: "100%",}}></div>
            <div className="img layer-base" style={{backgroundImage: `url(${hafez})`, backgroundSize: "100%",}}></div>
*/