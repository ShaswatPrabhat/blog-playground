import { animated, useSpring } from 'react-spring';
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <animated.div
        style={useSpring({
          config: { mass: 50, clamp: true },
          opacity: 1,
          from: { opacity: 0 },
        })}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to my tech blog!</h2>
        <p>Here I will share my musings and general tech stuff</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with me as I eat ?
        </a>
      </animated.div>
    </header>
  </div>
);

export default App;
