//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
        <div className="purpose-div">
          <h1 className="purpose-title">Our Purpose</h1>
          <p className="purpose-description">
          We are a tight-knit community of McGill students with a shared passion for fostering Iranian culture and traditions in Montreal. 
          Our club provides a welcoming and inclusive space for individuals to connect, socialize, and engage in meaningful events and activities. 
          From lively cultural celebrations to thought-provoking discussions, we offer a diverse range of experiences that showcase the rich heritage of Iran. 
          By bringing people together, we aim to build lasting friendships and a deeper appreciation for the vibrant Iranian community here in Montreal.
          </p>
        </div>
        <div className="values-div">
          <h1 className="values-title">Core Values</h1>
          <div className="values-container">
            <div className="value value1">
              <h2 className="name">Value1</h2>
              <p className="description">Descrpition</p>
            </div>
            <div className="value value1">
              <h2 className="name">Value2</h2>
              <p className="description">Descrpition</p>
            </div>
            <div className="value value1">
              <h2 className="name">Value3</h2>
              <p className="description">Descrpition</p>
            </div>
          </div>  
        </div>
        <p className="intro-to-const">Introduction to constitution</p>
        <a className='link-to-const'>Link to constitution that opens it in another tab</a>

        

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
