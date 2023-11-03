import logo from './logo.svg';
import './App.css';

function Project1({hello}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {hello}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {hello}
        </a>
      </header>
    </div>
  );
}

export default Project1;