import utils from '../styles/utils.module.scss';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
export const About = () => {
  return (
    <section className={utils.container} id="about">
      <h2>About Me</h2>
      <p style={{ textAlign: 'left', fontSize: 18 }}>
        I am a software developer based in the Philippines. I am passionate
        about coding and I am constantly learning more about web development. I
        am confident with my learning ability and with that, I love trying new
        technologies.
      </p>
      <p style={{ textAlign: 'left', fontSize: 18 }}>
        I usually play video games during my free time. Mostly catching Pokemon!
      </p>
      <div style={{ margin: '1rem' }}>
        <a href="https://github.com/bananabread08">
          <AiFillGithub size={50} />
        </a>
        <a href="https://www.linkedin.com/in/ralph-majed-keene-fermin-601575231/">
          <AiFillLinkedin size={50} />
        </a>
      </div>
    </section>
  );
};
