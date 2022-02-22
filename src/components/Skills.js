import styled from 'styled-components';

const StyledSection = styled.section`
  background-color: aliceblue;
  padding: 1em;
`;

export default function Skills() {
  return (
    <StyledSection>
      <h2>Skills/Stack</h2>
      <h3>Always Learning</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>styled-components</li>
        <li>Firebase</li>
        <li>NodeJS</li>
        <li>Git</li>
      </ul>
    </StyledSection>
  );
}
