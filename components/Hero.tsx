import Link from 'next/link';
import { FaDog } from 'react-icons/fa';

import styles from '../styles/Hero.module.scss';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
export const Hero = () => {
  const [text] = useTypewriter({
    words: ['Hi, I am Maj!', 'Software Developer', 'Pokemon Trainer'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 75,
  });

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
        <FaDog />
      </h1>

      <div className={styles.btn_container}>
        <Link href="#about" passHref>
          <button
            className={styles.scroll_btn}
            aria-label="sroll button"
          ></button>
        </Link>
      </div>
    </main>
  );
};
