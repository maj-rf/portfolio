import Image from 'next/image';
import Link from 'next/link';
import { projectType } from '../types/projectTypes';
import styles from '../../styles/ProjectCard.module.scss';
export const ProjectCard = ({
  title,
  description,
  image,
  children,
}: projectType) => {
  return (
    <li className={styles.container} key={title}>
      <h2>{title}</h2>
      <div className={styles.img_div}>
        <Link key={title} href={`/projects/${title}`}>
          <a>
            <Image src={image} alt={title} />
          </a>
        </Link>
      </div>
      {children}
      <p>{description}</p>
    </li>
  );
};
