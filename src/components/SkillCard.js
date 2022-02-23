import styled from 'styled-components';

const Card = styled.li`
  background-color: #c7c7c7;
  padding: 1em;
  border-radius: 50%;
  img {
    vertical-align: middle;
  }
`;

export default function SkillCard({ name, image }) {
  return (
    <Card>
      <img src={image} alt={name}></img>
    </Card>
  );
}
