import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { Sass } from '@styled-icons/boxicons-logos/Sass';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Styledcomponents } from '@styled-icons/simple-icons/Styledcomponents';
import { Firebase } from '@styled-icons/boxicons-logos/Firebase';
import { Git } from '@styled-icons/boxicons-logos/Git';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';
import { Webpack } from '@styled-icons/simple-icons/Webpack';
import { Npmjs } from '@styled-icons/remix-fill/Npmjs';
import styled from 'styled-components';
import { wiggle } from '../globalStyles';

const HtmlIcon = styled(Html5)`
  height: 100px;
  width: auto;
`;

const CssIcon = styled(Css3)`
  height: 100px;
  width: auto;
`;

const JsIcon = styled(Javascript)`
  height: 100px;
  width: auto;
`;

const SassIcon = styled(Sass)`
  height: 100px;
  width: auto;
`;

const ReactIcon = styled(ReactLogo)`
  height: 100px;
  width: auto;
`;

const StyledIcon = styled(Styledcomponents)`
  height: 100px;
  width: auto;
`;

const FirebaseIcon = styled(Firebase)`
  height: 100px;
  width: auto;
`;

const GitIcon = styled(Git)`
  height: 100px;
  width: auto;
`;

const NodeIcon = styled(Nodejs)`
  height: 100px;
  width: auto;
`;

const WebpackIcon = styled(Webpack)`
  height: 100px;
  width: auto;
`;

const NpmIcon = styled(Npmjs)`
  height: 100px;
  width: auto;
`;

const AboutSection = styled.section`
  padding: 1rem;
  margin: 6rem;
  line-height: 1.5rem;

  @media screen and (max-width: 768px) {
    margin: 1rem;
  }
`;

const AnimatedP = styled.p`
  color: ${(props) => props.theme.secondary};
  animation-name: ${wiggle};
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
`;

const SkillCardWrapper = styled.ul`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(90px, 90px));
  grid-auto-rows: 120px;
  gap: 1rem;
`;

export const data = [
  { name: 'HTML5', icon: <HtmlIcon /> },
  { name: 'CSS3', icon: <CssIcon /> },
  { name: 'SASS', icon: <SassIcon /> },
  { name: 'JavaScript', icon: <JsIcon /> },
  { name: 'ReactJS', icon: <ReactIcon /> },
  { name: 'styled-components', icon: <StyledIcon /> },
  { name: 'Google Firebase', icon: <FirebaseIcon /> },
  { name: 'Git', icon: <GitIcon /> },
  { name: 'NodeJS', icon: <NodeIcon /> },
  { name: 'Webpack', icon: <WebpackIcon /> },
  { name: 'npm', icon: <NpmIcon /> },
];

export { AboutSection, SkillCardWrapper, AnimatedP };
