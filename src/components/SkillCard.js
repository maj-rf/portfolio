import { useState } from 'react';
import styled from 'styled-components';

const Card = styled.li`
  background-color: rgba(200, 200, 200, 0.3);
  border-radius: 20%;
  div {
    font-size: 20px;
    height: 160px;
  }
  img {
    padding: 1rem;
    max-height: 160px;
    height: auto;
    width: auto;
  }
`;

export default function SkillCard({ name, image }) {
  const [flip, setFlip] = useState(false);
  return (
    <Card
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      {flip ? <div>{name}</div> : <img src={image} alt={name}></img>}
    </Card>
  );
}
