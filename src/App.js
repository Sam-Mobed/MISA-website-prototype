//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="purpose-div">
          <h1 className="purpose-title">Our Purpose</h1>
          <p className="purpose-description">Dscription</p>
        </div>
        <div className="values-div">
          <h1 className="values-title">Core Values</h1>
          <div className="values-container">
            <div className="value1">
              <h2>Value1</h2>
              <p>Descrpition</p>
            </div>
            <div className="value1">
              <h2>Value2</h2>
              <p>Descrpition</p>
            </div>
            <div className="value1">
              <h2>Value3</h2>
              <p>Descrpition</p>
            </div>
          </div>
          <p>Introduction to constitution</p>
          <a>Link to constitution that opens it in another tab</a>
        </div>

        

    </div>
  );
}

export default App;

/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/ 
