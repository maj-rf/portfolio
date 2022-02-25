import styled, { keyframes } from 'styled-components';
import { Hand } from '@styled-icons/entypo/Hand';
const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1.2vw);
  padding: 3rem;
  span {
    color: #02a3ee;
  }
  /* @media only screen and (max-width: 768px) {
  } */
`;
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

const WaveHand = styled(Hand)`
  height: 50px;
  width: auto;

  animation-name: ${waveAnimation};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`;

export default function Intro() {
  return (
    <StyledSection>
      <div className="intro-cont">
        <h3>
          Hello,{' '}
          <span>
            <WaveHand />
          </span>
        </h3>
        <h2>
          I am <span>Majed Fermin</span>.
        </h2>
        <h3>Frontend Developer from PH.</h3>
        <h4> I create responsive websites and applications.</h4>
      </div>
    </StyledSection>
  );
}
