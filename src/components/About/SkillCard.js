import styled from 'styled-components';

const Card = styled.li`
  background-color: rgba(200, 200, 200, 0.3);
  border-radius: 20%;
  text-align: center;
`;

export default function SkillCard({ name, icon }) {
  return (
    <Card>
      <div>{icon}</div>
    </Card>
  );
}
