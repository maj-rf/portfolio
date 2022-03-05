import styled from 'styled-components';
import { wiggle } from '../globalStyles';
const ProjectSection = styled.section`
  padding: 1rem;
  margin: 6rem;
  line-height: 1.5rem;

  font-size: calc(0.7rem + 1.1vw);

  a {
    text-decoration: none;
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    margin-right: 1rem;
    border: 1px solid;
    border-radius: 5px;
    cursor: pointer;
    padding: 0.5rem 1rem 0.5rem 1rem;
    transition: filter 300ms;
    &:hover {
      filter: brightness(0.7);
    }
  }

  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
`;

const AnimatedP = styled.p`
  color: ${(props) => props.theme.secondary};
  animation-name: ${wiggle};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
`;

const ProjectsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  font-size: 16px;
`;

export { ProjectSection, ProjectsContainer, AnimatedP };
