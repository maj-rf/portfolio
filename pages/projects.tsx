import { NextPage } from 'next';
import { projectdata } from '../components/data/projectData';
import styles from '../styles/Projects.module.scss';
import { Project } from '../components/project/Project';
import { Tags } from '../components/project/Tags';
const Projects: NextPage = () => {
  return (
    <section className={styles.container}>
      <h1>My Personal Projects</h1>
      <ul className={styles.proj_container}>
        {projectdata.map((proj) => {
          return (
            <Project
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
            </Project>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
