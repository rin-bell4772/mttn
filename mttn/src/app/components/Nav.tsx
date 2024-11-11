import styles from './Nav.module.css';
import Link from 'next/link';

type NavProps = {
  // add props here
  isLoggedIn: boolean;
};

export default function Nav({ isLoggedIn }: NavProps) {
  return (
    <nav className={styles.nav}>
      <p className={styles.icon}>Icon</p>
      {isLoggedIn ? 
      <Link href="/">  
        <p className={styles.text}>Log out</p>
      </Link> 
      :
      <Link href="/login">
        <p className={styles.text}>Log in</p>
      </Link>
    }

    </nav>
  );
}
