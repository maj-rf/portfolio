import AppHead from './Apphead';
import { Footer } from './Footer';
import Header from './Header';
import styles from '../../styles/Layout.module.scss';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <AppHead title="maj.dev" content="Maj's Portfolio" />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
