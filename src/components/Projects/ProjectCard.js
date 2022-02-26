import React from 'react';
import { ProjImg } from './ProjectCard.style';
import Tags from './Tags';

function ProjectCard({ proj }) {
  return (
    <li key={proj.title}>
      <h2>{proj.title}</h2>
      <div>
        <ProjImg src={proj.image} alt={proj.title} />
      </div>
      <div>
        <Tags proj={proj} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum minus
        iste necessitatibus, facere aperiam et accusamus nam velit veniam
        excepturi.
      </p>
      <a href={proj.repo}>Repository</a>
      <a href={proj.live}>Demo</a>
    </li>
  );
}

export default ProjectCard;
