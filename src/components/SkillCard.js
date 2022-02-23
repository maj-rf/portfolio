import styled from 'styled-components';

const Card = styled.li`
  padding: 0.3em;
  img {
    vertical-align: middle;
    max-height: 170px;
    max-width: 170px;
  }
`;

export default function SkillCard({ name, image }) {
  return (
    <Card>
      <img src={image} alt={name}></img>
    </Card>
  );
}
