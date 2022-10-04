import Link from 'next/link';
import { FaDog } from 'react-icons/fa';
import styles from '../styles/Hero.module.scss';
export const Hero = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Hi, I am Maj! Software Developer. <FaDog />
      </h1>
      <Link href="#about" passHref>
        <button
          className={styles.scroll_btn}
          aria-label="sroll button"
        ></button>
      </Link>
    </main>
  );
};
