import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: #fff;
  padding: 1em;
`;

export default function Intro() {
  return (
    <StyledSection>
      <h1>Hi, I'm Maj!</h1>
      <h2>Frontend Developer</h2>
      <p> I create responsive websites and applications.</p>
    </StyledSection>
  );
}
