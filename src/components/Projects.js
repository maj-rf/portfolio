import styled from 'styled-components';
import { projectdata } from '../utils/projectdata';
const StyledSection = styled.section`
  padding: 1rem;
`;

export default function Projects() {
  return (
    <StyledSection>
      <h2>Projects</h2>
      <h3>Occasionally building.</h3>
      <ul>
        {projectdata.map((proj) => {
          return (
            <li key={proj.title}>
              <h3>{proj.title}</h3>
              <div>Image</div>
              <div>
                <p>Stack:</p>
                <ul>
                  {proj.tags.map((tag) => {
                    return <li key={tag + proj.title}>{tag}</li>;
                  })}
                </ul>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                minus iste necessitatibus, facere aperiam et accusamus nam velit
                veniam excepturi.
              </p>
              <a href={proj.repo}>Repository</a>
              <a href={proj.live}>Demo</a>
            </li>
          );
        })}
      </ul>
    </StyledSection>
  );
}
