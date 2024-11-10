import styles from './Nav.module.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <p className={styles.icon}>Icon</p>
      <Link href="/login">
        <p className={styles.login}>Log in</p>
      </Link>
    </nav>
  );
}
