import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';


type NavProps = {
  // add props here
  isLoggedIn: boolean;
};

export default function Nav({ isLoggedIn }: NavProps) {
  return (
    <nav className={styles.nav}>
      <Image src="/images/mttnLogo.png" alt="logo" width={40} height={40} />
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
