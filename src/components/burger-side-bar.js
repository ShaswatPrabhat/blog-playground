import React, { useState } from 'react';
import HamburgerMenuIcon from 'react-hamburger-menu';
import { HamburgerMenuContainer, HamburgerMenuIconContainer, StyledMenu } from './burger-side-bar.styles';
import { HOME_PATH } from '../utils/constants';
import { StyledAnchor } from '../App.styles';

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
        <StyledAnchor href={HOME_PATH}>About me</StyledAnchor>
        <StyledAnchor href={HOME_PATH}>Poems</StyledAnchor>
        <StyledAnchor href={HOME_PATH}>Contact me</StyledAnchor>
      </StyledMenu>
    </HamburgerMenuContainer>
  );
};

export default BurgerSideBar;
