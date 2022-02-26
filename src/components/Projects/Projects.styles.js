import styled from 'styled-components';
import { wiggle } from '../globalStyles';
const ProjectSection = styled.section`
  padding: 1rem;
  margin: 6rem;
  line-height: 1.5rem;

  h3 {
    color: #02a3ee;
    animation-name: ${wiggle};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
  }
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

export { ProjectSection };
