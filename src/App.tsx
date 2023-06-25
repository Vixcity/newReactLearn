import React from "react";
import type { MouseEvent } from "react";
// @ts-ignore
import logo from "./logo.svg";
import "./App.css";

function App() {
  const fn = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("clicked...");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Hello World</p>
        <button onClick={fn}>点击</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "white", color: "red" }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
