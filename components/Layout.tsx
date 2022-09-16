import AppHead from './Apphead';
import Header from './Header';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <AppHead title="maj.dev" content="Maj's Portfolio" />
      <Header />
      {children}
    </div>
  );
}
