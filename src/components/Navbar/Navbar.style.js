import styled from 'styled-components';
import { LightMode } from '@styled-icons/material/LightMode';
import { DarkMode } from '@styled-icons/material-rounded/DarkMode';

const NavWrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: space-between;
  z-index: 1;
  overflow: hidden;
`;

const Moon = styled(DarkMode)`
  height: 40px;
  width: auto;
  cursor: pointer;
  color: white;
  border-radius: 50%;
  background-color: #805ad5;
  &:hover {
    background-color: #592fbb;
  }
`;

const Sun = styled(LightMode)`
  height: 40px;
  width: auto;
  cursor: pointer;
  border-radius: 50%;
  background-color: #fbd38d;
  &:hover {
    background-color: #fabf58;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.li`
  padding: 1rem;
`;

export { NavWrapper, Moon, Sun, LinkContainer, Links };
