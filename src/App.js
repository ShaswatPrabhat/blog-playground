import { motion } from 'framer-motion';
import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <motion.div
        animate={{ scale: 0.9 }}
        transition={{ type: 'spring', duration: 1.8, bounce: 0.25 }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to my tech blog!</h2>
        <p>Here I will share my musings and general tech stuff</p>
        <p>Also I am always hungry</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with me as I eat ?
        </a>
      </motion.div>
    </header>
  </div>
);

export default App;
