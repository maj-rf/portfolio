import Link from 'next/link';
import styles from '../../styles/Header.module.scss';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const currentRoute = router.pathname;

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
            <Link href="/projects">
              <a
                className={
                  currentRoute === '/projects' ? `${styles.active}` : undefined
                }
              >
                Projects
              </a>
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <a
                className={
                  currentRoute === '/contact' ? `${styles.active}` : undefined
                }
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <button className={styles.btn}>O</button>
      </nav>
    </header>
  );
}
