import styled from 'styled-components';

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1rem + 1.1vw);

  .intro-cont {
    padding: 1rem;
  }
  span {
    color: #02a3ee;
  }

  /* @media only screen and (max-width: 768px) {
  } */
`;

export default function Intro() {
  return (
    <StyledSection>
      <div className="intro-cont">
        <h3>Hi,</h3>
        <h2>
          I am <span>Majed Fermin</span>.
        </h2>
        <h3>Frontend Developer from PH.</h3>
        <h4> I create responsive websites and applications.</h4>
      </div>
    </StyledSection>
  );
}
