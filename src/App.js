import logo from "./logo.svg";
import "./App.css";
import RM from "./rm.png";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={RM}
          alt="Rick and Morty Logo"
          style={{
            width: "40%",
            height: "auto",
            marginBottom: "-40px",
          }}
        />
        <Home />
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        </a> */}
      </header>
    </div>
  );
}

export default App;
