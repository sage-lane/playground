import React from "react";
import logo from "./logo.svg";
import "./App.css";

// React Task -
// Create a form which captures the following data:
// 1) First Name (String) Last Name (String)
// 2) Salary (Integer)
// 3) Email (String)
// 4) Executive Hire (True / False)
// 5) Department (List of options)
//    - localhost:5000/departments

// CSS Task -
// 5) Style Form - CSS Freeform challenge
// 6) Align form - Any CSS Algo, Flexbox etc.

function App() {
  React.useEffect(() => {
    async function fetchData() {
      const data = await fetch("http://127.0.0.1:5000/departments");
      const json = await data.json();
      console.log(json);
    }
    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
