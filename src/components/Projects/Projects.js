import { projectdata } from '../../utils/projectdata';
import { ProjectSection } from './Projects.styles';
import ProjectCard from './ProjectCard';
export default function Projects() {
  return (
    <ProjectSection>
      <h1>Projects</h1>
      <h3>Occasionally building.</h3>
      <ul>
        {projectdata.map((proj) => {
          return <ProjectCard key={proj.title} proj={proj} />;
        })}
      </ul>
    </ProjectSection>
  );
}
