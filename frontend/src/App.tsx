import React from "react";
import logo from "./logo.svg";
import "./App.css";

// React Task -
// Create a form which captures the following data:
// 1) First Name (String) Last Name (String)
// 2) Salary (Integer)
// 3) Executive Hire (True / False)
// 4) Department (List of options)

// CSS Task -
// 5) Style Form - CSS Freeform challenge
// 6) Align form - Any CSS Algo, Flexbox etc.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
