import React, { useState } from 'react';
import HamburgerMenuIcon from 'react-hamburger-menu';
import { HamburgerMenuContainer, HamburgerMenuIconContainer, StyledMenu } from './burger-side-bar.styles';
import { HOME_PATH } from '../utils/constants';

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
        <a href={HOME_PATH}>Home</a>
        <a href={HOME_PATH}>About me</a>
        <a href={HOME_PATH}>Poems</a>
        <a href={HOME_PATH}>Contact me</a>
      </StyledMenu>
    </HamburgerMenuContainer>
  );
};

export default BurgerSideBar;
