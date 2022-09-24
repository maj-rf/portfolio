import Image from 'next/image';
import Link from 'next/link';
import { projectType } from '../types/projectTypes';
import styles from '../../styles/ProjectCard.module.scss';
export const ProjectCard = ({
  title,
  description,
  image,
  repo,
  live,
  children,
}: projectType) => {
  return (
    <li className={styles.container} key={title}>
      <h2>{title}</h2>
      <div className={styles.img_div}>
        <Link key={title} href={`/projects/${title}`}>
          <Image src={image} alt={title} />
        </Link>
      </div>
      {children}
      <p>{description}</p>
      <a target="_blank" href={repo} rel="noopener noreferrer">
        Github
      </a>
      <a target="_blank" href={live} rel="noopener noreferrer">
        Demo
      </a>
    </li>
  );
};
