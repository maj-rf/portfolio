import { data } from './About.style';
import { AboutSection, SkillCardWrapper } from './About.style';
import SkillCard from './SkillCard';
export default function About() {
  return (
    <AboutSection id="about">
      <div>
        <h1>About</h1>
        <h3>Consitency is key.</h3>
        <p>
          You can call me Maj. I went through the non-traditional way of
          learning programming: self-teaching.{' '}
        </p>
        <p>
          I am confident with my learning ability and with that, I love trying
          new technologies. Currently learning more about the backend:{' '}
          <strong>NodeJS</strong>, <strong>MongoDB</strong>, and{' '}
          <strong>Express</strong>.
        </p>
      </div>
      <div>
        <h2>Tech Stack</h2>
        <h3>Always Learning.</h3>
        <SkillCardWrapper>
          {data.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </SkillCardWrapper>
      </div>
    </AboutSection>
  );
}
