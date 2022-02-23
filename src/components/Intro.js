import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: #fff;
  padding: 1em;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;

  .left {
    flex: 40%;
  }

  .right {
    flex: 60%;
  }
`;

export default function Intro() {
  return (
    <StyledSection>
      <div className="left">
        <p>LOGO</p>
      </div>
      <div className="right">
        <h1>Hi, I'm Maj!</h1>
        <h2>Frontend Developer</h2>
        <p> I create responsive websites and applications.</p>
      </div>
      <div></div>
    </StyledSection>
  );
}
