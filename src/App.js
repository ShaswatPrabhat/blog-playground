import { motion } from 'framer-motion';
import React from 'react';
import './App.css';
import BurgerSideBar from './components/burger-side-bar';

const App = () => (
  <div className="App">
    <BurgerSideBar />
    <header className="App-header">
      <motion.div
        animate={{ scale: 0.9 }}
        transition={{ type: 'spring', duration: 1.8, bounce: 0.25 }}
      >
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
