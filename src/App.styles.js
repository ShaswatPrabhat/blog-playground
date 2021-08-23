import styled from 'styled-components';
import { m } from 'framer-motion';

export const ScreenContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
export const AppHeader = styled.header`
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  //background-color: aqua;
`;

export const StyledAnchor = styled(m.a)`
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
`;

export default {};
