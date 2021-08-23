import { LazyMotion, m } from 'framer-motion';
import React from 'react';
import './App.css';
import BurgerSideBar from './components/burger-side-bar';
import { AppHeader, ScreenContainer, StyledAnchor } from './App.styles';
import { HOME_PATH } from './utils/constants';

const loadFeatures = () => import('./framer-motion-feature.js').then((res) => res.default);

const App = () => (
  <div className="App">
    <LazyMotion features={loadFeatures}>
      <BurgerSideBar />
      <AppHeader>
        <StyledAnchor href={HOME_PATH}>Shaswat&apos;s blog</StyledAnchor>
      </AppHeader>
      <ScreenContainer>
        <m.div
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 1.8, bounce: 0.7 }}
        >
          <h2>Welcome to my blog!</h2>
          <p>Here I will share my musings and general Shaswat stuff</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React with me as I read ?
          </a>
        </m.div>
      </ScreenContainer>
    </LazyMotion>
  </div>
);

export default App;
