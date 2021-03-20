import { animated, useSpring } from "react-spring";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="App-header">
      <animated.div
        style={useSpring({
          config: { mass: 50 },
          opacity: 1,
          from: { opacity: 0 },
        })}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <p>Turn on the Pankha!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </animated.div>
    </header>
  </div>
);

export default App;
