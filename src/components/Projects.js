import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 1rem;
  height: 100vh;
`;

export default function Projects() {
  return (
    <StyledSection>
      <h2>Projects</h2>
      <h3>Occasionally building.</h3>
      <ul>
        <li>
          <h3>Project Title</h3>
          <div>Image</div>
          <p>Stack (HTML, CSS, Vanilla JavaScript)</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus
            iste necessitatibus, facere aperiam et accusamus nam velit veniam
            excepturi.
          </p>
        </li>
        <li>
          <h3>Project Title</h3>
          <div>Image</div>
          <p>Stack (HTML, CSS, Vanilla JavaScript)</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus
            iste necessitatibus, facere aperiam et accusamus nam velit veniam
            excepturi.
          </p>
        </li>
      </ul>
    </StyledSection>
  );
}
