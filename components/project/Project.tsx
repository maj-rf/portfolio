import Image from 'next/image';
import { projectType } from '../types/projectTypes';

export const Project = ({
  title,
  description,
  image,
  repo,
  live,
  children,
}: projectType) => {
  return (
    <li key={title}>
      <h2>{title}</h2>
      <div>
        <Image src={image} alt={title} />
      </div>
      {children}
      <p>{description}</p>
      <a href={repo}>Github</a>
      <a href={live}>Demo</a>
    </li>
  );
};
