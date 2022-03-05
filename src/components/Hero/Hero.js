import {
  HeroSection,
  WaveHand,
  GhIcon,
  LinkedinIcon,
  Icontainer,
} from './Hero.style';

export default function Hero(props) {
  return (
    <HeroSection id="hero">
      <div className="intro-cont">
        <p>
          Hello,{' '}
          <span>
            <WaveHand />
          </span>
        </p>
        <h1>
          I am <span>Majed Fermin</span>.
        </h1>
        <h2>Frontend Developer.</h2>
        <h2> I create responsive websites and applications.</h2>
        <Icontainer>
          <a href="https://github.com/bananabread08" alt="">
            <GhIcon title="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ralph-majed-keene-fermin-601575231/">
            <LinkedinIcon title="linkedin-icon" />
          </a>
        </Icontainer>
      </div>
    </HeroSection>
  );
}
