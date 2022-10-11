import Link from 'next/link';
import styles from '../../styles/Header.module.scss';
import { useRouter } from 'next/router';
import { FiSun, FiMail } from 'react-icons/fi';
export default function Header() {
  const router = useRouter();
  const currentRoute = router.asPath;
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a
                className={
                  currentRoute === '/' ? `${styles.active}` : undefined
                }
              >
                maj.dev
              </a>
            </Link>
          </li>
          <li>
            <Link href={'#projects'}>
              <a
                className={
                  currentRoute.includes('projects')
                    ? `${styles.active}`
                    : undefined
                }
              >
                Projects
              </a>
            </Link>
          </li>
          <li className={styles.mail}>
            <a href="mailto:rmkfermin@gmail.com?subject=We are Hiring!">
              <FiMail />
            </a>
          </li>
        </ul>
        {/* <button className={styles.btn} aria-label="dark mode toggle">
          <FiSun />
        </button> */}
      </nav>
    </header>
  );
}
