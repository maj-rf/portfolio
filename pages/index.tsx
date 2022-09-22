import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Maj&#39;s Portfolio!</a>
        </h1>
        <section className={styles.container}>
          <h1>Software Engineer, Front-end Developer, Gamer</h1>
          <p>
            I am Maj, a software developer based in the Philippines. I like to
            teach myself how to code. I am passionate about coding and I am
            constantly learning more about web development. I went through the
            non-traditional way of learning programming: self-teaching. I am
            confident with my learning ability and with that, I love trying new
            technologies.
          </p>
          <p>I usually catch Pokemon during my free time!</p>
        </section>
      </main>
      <section className={styles.container}>
        <h1>Tech Stack</h1>
      </section>
    </div>
  );
};

export default Home;
