import styled from 'styled-components';
import { data } from '../utils/skilldata';
import SkillCard from './SkillCard';

const StyledSection = styled.section`
  padding: 1em;
`;

const SkillCardWrapper = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  grid-auto-rows: 200px;
  gap: 0.5em 1em;
`;

export default function Skills() {
  return (
    <StyledSection>
      <h2>Skills/Stack</h2>
      <h3>Always Learning</h3>
      <SkillCardWrapper>
        {data.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} image={skill.image} />
        ))}
      </SkillCardWrapper>
    </StyledSection>
  );
}
