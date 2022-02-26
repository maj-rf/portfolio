import {
  HeroSection,
  WaveHand,
  GhIcon,
  LinkedinIcon,
  Icontainer,
} from './Hero.style';

export default function Hero(props) {
  return (
    <HeroSection>
      <div className="intro-cont">
        <h3>
          Hello,{' '}
          <span>
            <WaveHand />
          </span>
        </h3>
        <h2>
          I am <span>Majed Fermin</span>.
        </h2>
        <h2>Frontend Developer.</h2>
        <h3> I create responsive websites and applications.</h3>
        <Icontainer>
          <a href="https://github.com/bananabread08">
            <GhIcon />
          </a>
          <a href="https://www.linkedin.com/in/ralph-majed-keene-fermin-601575231/">
            <LinkedinIcon />
          </a>
        </Icontainer>
      </div>
    </HeroSection>
  );
}
