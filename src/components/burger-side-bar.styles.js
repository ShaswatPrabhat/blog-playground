import styled from 'styled-components';
import device from '../utils/break-points';

export const HamburgerMenuContainer = styled.div`
  padding: 20px;
  position: fixed;
  z-index: 100;
`;

export const HamburgerMenuIconContainer = styled.div`
  z-index: 100;
  position: fixed;
  @media ${device('max').tablet} {
    bottom: 0;
    right: 0;
    margin-right: 30px;
    margin-bottom: 60px;
  }
`;

export const StyledMenu = styled.nav`
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 1;
  background: #000;
  transform: ${({ open }) => (open ? 'translateX(100)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media ${device('max').tablet} {
    transform: ${({ open }) => {
    if (open) return 'translateZ(-100)';
    return 'translateZ(50)';
  }};
  }

  a {
    font-size: 2rem;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    color: #61dafb;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    //&:hover {
    //  color: #343078;
    //}
  }
`;

export default {};
