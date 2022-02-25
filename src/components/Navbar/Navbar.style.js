import styled from 'styled-components';
import { LightMode } from '@styled-icons/material/LightMode';
import { DarkMode } from '@styled-icons/material-rounded/DarkMode';
import { Dog } from '@styled-icons/fa-solid/Dog';
import { waveAnimation } from '../globalStyles';
import { MenuAlt3 } from '@styled-icons/heroicons-solid/MenuAlt3';
const Moon = styled(DarkMode)`
  margin-top: 5px;
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
  margin-top: 5px;
  height: 40px;
  width: auto;
  cursor: pointer;
  border-radius: 50%;
  background-color: #fbd38d;
  &:hover {
    background-color: #fabf58;
  }
`;

const LinksContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.li`
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    bottom: 5px;
    left: 0;
    right: 0;
    width: 0;
    margin: 0 auto;
    height: 2px;
    background-color: ${(props) => props.theme.text};
  }
  &:hover::after {
    width: 80%;
    transition: all 0.5s ease-in-out;
  }
`;

const LogoContainer = styled(LinksContainer)`
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const DogIcon = styled(Dog)`
  height: 1.2rem;
  margin-bottom: 5px;
  width: auto;
  color: ${(props) => props.theme.text};

  &:hover {
    animation-name: ${waveAnimation}; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.5s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }
`;

const ButtonsContainer = styled(LinksContainer)`
  margin-right: 0.5rem;
`;
const BurgerMenu = styled(MenuAlt3)`
  height: 40px;
  width: auto;
  cursor: pointer;
  margin-right: 0.5rem;
`;

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

  @media screen and (max-width: 768px) {
    ${Links} {
      //display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    ${BurgerMenu} {
      display: none;
    }
  }
`;

export {
  NavWrapper,
  Moon,
  Sun,
  LinksContainer,
  Links,
  DogIcon,
  LogoContainer,
  BurgerMenu,
  ButtonsContainer,
};
