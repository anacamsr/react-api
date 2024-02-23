import logo from "./logo.svg";
import "./App.css";
import RM from "./assets/rm.png";
import Dev from "./assets/dev.png";
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
      <footer className="App-footer">
        <div className="footer-container">
          <div className="footer-column">
            <img
              src={Dev}
              alt="Logo"
              style={{
                width: "100px",
                height: "auto",
              }}
            />
          </div>
          <div className="footer-column">
            <p>Ana Carolina Mansur Selier Rodrigues</p>
            <p>carolina.mansur.selier@gmail.com</p>
          </div>
          <div className="footer-column">
            <p><a href="https://www.linkedin.com/in/ana-carolina-mansur-selier-rodrigues-7b286320/" style={{ color: "#B2DF28", textDecoration: "none" }}>Linkedin</a></p>
            <p><a href="https://github.com/anacamsr" style={{ color: "#B2DF28", textDecoration: "none" }}>GitHub</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
