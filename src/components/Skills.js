import styled from 'styled-components';
import { data } from '../utils/skilldata';
import SkillCard from './SkillCard';

const StyledSection = styled.section`
  background-color: aliceblue;
  padding: 1em;

  ul {
    list-style: none;
  }
`;

const SkillCardWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
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
