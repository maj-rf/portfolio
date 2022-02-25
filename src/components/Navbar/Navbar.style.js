import styled, { keyframes } from 'styled-components';
import { LightMode } from '@styled-icons/material/LightMode';
import { DarkMode } from '@styled-icons/material-rounded/DarkMode';
import { Dog } from '@styled-icons/fa-solid/Dog';

const waveAnimation = keyframes`
0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }`;
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

const LinkContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.li`
  padding: 1rem;
`;

const LogoContainer = styled(LinkContainer)`
  margin: 1rem;
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
      display: none;
    }
  }
`;

export { NavWrapper, Moon, Sun, LinkContainer, Links, DogIcon, LogoContainer };
