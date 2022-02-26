import { projectdata } from '../../utils/projectdata';
import { ProjectSection, ProjectsContainer } from './Projects.styles';
import ProjectCard from './ProjectCard';
export default function Projects() {
  return (
    <ProjectSection id="projects">
      <h1>Projects</h1>
      <h3>Occasionally building.</h3>
      <ProjectsContainer>
        {projectdata.map((proj) => {
          return <ProjectCard key={proj.title} proj={proj} />;
        })}
      </ProjectsContainer>
    </ProjectSection>
  );
}
