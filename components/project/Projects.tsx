import { projectdata } from '../data/projectData';
import styles from '../../styles/Projects.module.scss';
import { ProjectCard } from './ProjectCard';
import { Tags } from './Tags';

export const Projects = () => {
  return (
    <section className={styles.container}>
      <h1>My Personal Projects</h1>
      <ul className={styles.proj_container}>
        {projectdata.map((proj) => {
          return (
            <ProjectCard
              key={proj.title}
              title={proj.title}
              description={proj.description}
              tags={proj.tags}
              image={proj.image}
              repo={proj.repo}
              live={proj.live}
            >
              <ul className={styles.tag_container}>
                {proj.tags.map((tag) => {
                  return <Tags key={tag + proj.title} tag={tag} />;
                })}
              </ul>
            </ProjectCard>
          );
        })}
      </ul>
    </section>
  );
};
