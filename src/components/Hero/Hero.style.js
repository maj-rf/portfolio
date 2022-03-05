import styled from 'styled-components';
import { Hand } from '@styled-icons/entypo/Hand';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';
import { waveAnimation } from '../globalStyles';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1.1vw);
  padding: 2rem;
  padding-top: 0;
  margin-top: -1rem;
  span {
    color: ${(props) => props.theme.secondary};
  }
  /* @media only screen and (max-width: 768px) {
  } */
`;

const WaveHand = styled(Hand)`
  height: 50px;
  width: auto;
  animation-name: ${waveAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

const GhIcon = styled(Github)`
  height: 70px;
  width: auto;
  transition: filter 300ms;

  &:hover {
    filter: brightness(0.7);
  }
`;

const LinkedinIcon = styled(Linkedin)`
  height: 70px;
  width: auto;
  transition: filter 300ms;

  &:hover {
    filter: brightness(0.7);
  }
`;

const Icontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
`;

export { HeroSection, WaveHand, GhIcon, LinkedinIcon, Icontainer };
