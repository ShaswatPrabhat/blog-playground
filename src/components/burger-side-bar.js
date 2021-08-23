import React, { useState } from 'react';
import HamburgerMenuIcon from 'react-hamburger-menu';
import {
  HamburgerMenuContainer,
  HamburgerMenuIconContainer,
  StyledMenu,
} from './burger-side-bar.styles';

import { HOME_PATH } from '../utils/constants';
import { StyledAnchor } from '../App.styles';

const framerStyledAnchorVariants = {
  opened: {
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
  closed: {
    scale: 0.8,
  },
};

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
        <StyledAnchor
          variants={framerStyledAnchorVariants}
          animate={isMenuOpen ? 'opened' : 'closed'}
          href={HOME_PATH}
        >
          About me
        </StyledAnchor>
        <StyledAnchor
          variants={framerStyledAnchorVariants}
          animate={isMenuOpen ? 'opened' : 'closed'}
          href={HOME_PATH}
        >
          Poems
        </StyledAnchor>
        <StyledAnchor
          variants={framerStyledAnchorVariants}
          animate={isMenuOpen ? 'opened' : 'closed'}
          href={HOME_PATH}
        >
          Contact me
        </StyledAnchor>
      </StyledMenu>
    </HamburgerMenuContainer>
  );
};

export default BurgerSideBar;
