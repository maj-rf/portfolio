import styled from 'styled-components';
import { Hand } from '@styled-icons/entypo/Hand';
import { waveAnimation } from './globalStyles';
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
