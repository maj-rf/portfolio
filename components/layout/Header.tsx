import Link from 'next/link';
import styles from '../../styles/Header.module.scss';
import { useRouter } from 'next/router';
import { FiSun } from 'react-icons/fi';
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
          <li>
            <Link href={'#footer'}>
              <a
                className={
                  currentRoute === '/#footer' ? `${styles.active}` : undefined
                }
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <button className={styles.btn}>
          <FiSun />
        </button>
      </nav>
    </header>
  );
}
