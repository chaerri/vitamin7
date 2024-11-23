import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import '../styles/globals.css';

export default function Home() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className={clsx('container', { 'dark-mode': pathname === '/dark-mode' })}>
      <h1>Welcome to the Home Page</h1>
      <div>
        <Link href="/dark-mode">
          <button>Dark Mode</button>
        </Link>
        <Link href="/light-mode">
          <button>Light Mode</button>
        </Link>
      </div>
    </div>
  );
}
