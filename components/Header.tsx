import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <h1>maj.dev</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Projects</Link>
          </li>
          <li>
            <Link href="/cart">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
