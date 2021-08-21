import React, { useState } from 'react';
import HamburgerMenuIcon from 'react-hamburger-menu';
import {
  StyledMenu,
  HamburgerMenuContainer,
  HamburgerMenuIconContainer,
} from './burger-side-bar.styles';

const BurgerSideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HamburgerMenuContainer>
      <HamburgerMenuIconContainer>
        <HamburgerMenuIcon
          className="hamburgerMenu"
          animationDuration={0.3}
          isOpen={isMenuOpen}
          menuClicked={() => {
            setIsMenuOpen((prev) => !prev);
          }}
          rotate={0}
          color="#61dafb"
        />
      </HamburgerMenuIconContainer>
      <StyledMenu open={isMenuOpen}>
        <a href="/">About me</a>
        <a href="/">Poems</a>
        <a href="/">Contact me</a>
      </StyledMenu>
    </HamburgerMenuContainer>
  );
};

export default BurgerSideBar;
