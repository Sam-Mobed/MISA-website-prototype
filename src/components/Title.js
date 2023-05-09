import './Title.css';

function Title() {

    return (
        <div className="title-container">
            <div className="spacer">
                <h1 className="title">McGill Iranian Student Association</h1>
            </div>
        </div>
    );
}

export default Title;

/* 
<div className="img layer-base" style={{backgroundImage: `url(${hafez})`, backgroundSize: "100%",}}></div>
            <div className="img layer-base" style={{backgroundImage: `url(${hafez})`, backgroundSize: "100%",}}></div>
            <div className="img layer-base" style={{backgroundImage: `url(${hafez})`, backgroundSize: "100%",}}></div>


            <div className="title-container">
            <div className="buffer"></div>
            <div className="row1">
                <img className="cloud" src={cloud}></img>
            </div>
            <div className="row2" style={{backgroundImage: `url(${dome})`,}}>
                <h1 className="title">McGill Iranian Student Association</h1>
            </div>
            <div className="row3" style={{backgroundImage: `url(${rug})`,}}></div>
            
            
        </div>

        .title-container{
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    margin-top: 0px;
    
    width: auto;
    font-size: 5vw;
    text-align: center;
}

@font-face {
    font-family: "PT Serif";
    src: url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
    font-weight: normal;
    font-style: normal;
}

.title{
    font-family: "PT Serif", 'Gill Sans';
    letter-spacing: 0;
}

.buffer{
    flex-grow: 1;
    background-color: black;
}

.row1 {
    flex-grow: 1;
    background-color: green;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100px;
}

.cloud{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: auto;
    object-fit: cover;
    
}

.row2 {
    flex-grow: 1;
    background-color: white;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.row3 {
    flex-grow: 1;
    background-color: red;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
}

*/