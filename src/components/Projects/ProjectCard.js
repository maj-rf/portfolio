import React from 'react';
import { ProjImg, CardContainer } from './ProjectCard.style';
import Tags from './Tags';

function ProjectCard({ proj }) {
  return (
    <CardContainer key={proj.title}>
      <h2>{proj.title}</h2>
      <div>
        <ProjImg src={proj.image} alt={proj.title} />
      </div>
      <Tags proj={proj} />
      <p>{proj.description}</p>
      <a href={proj.repo}>Github</a>
      <a href={proj.live}>Demo</a>
    </CardContainer>
  );
}

export default ProjectCard;
