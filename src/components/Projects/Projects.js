import { projectdata } from '../../utils/projectdata';
import {
  ProjectSection,
  ProjectsContainer,
  AnimatedP,
} from './Projects.styles';
import ProjectCard from './ProjectCard';
export default function Projects() {
  return (
    <ProjectSection id="projects">
      <h1>Projects</h1>
      <AnimatedP>Occasionally building.</AnimatedP>
      <ProjectsContainer>
        {projectdata.map((proj) => {
          return <ProjectCard key={proj.title} proj={proj} />;
        })}
      </ProjectsContainer>
    </ProjectSection>
  );
}
