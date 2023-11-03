import logo from './logo.svg';
import './App.css';
import Project1 from './Project1';

function App() {

  let h = 'Hello, World!';

  return (
    <div className="App">
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
      <Project1 hello={h}/>
    </div>
  );
}

export default App;
