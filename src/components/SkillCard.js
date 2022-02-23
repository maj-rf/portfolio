import styled from 'styled-components';

const Card = styled.li`
  padding: 1em;
  img {
    vertical-align: middle;
    max-height: 200px;
    max-width: 200px;
  }
`;

export default function SkillCard({ name, image }) {
  return (
    <Card>
      <img src={image} alt={name}></img>
    </Card>
  );
}
