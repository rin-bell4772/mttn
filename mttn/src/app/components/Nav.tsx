import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import sidebar from '../images/sidebar.png';


type NavProps = {
  // add props here
  isLoggedIn: boolean;
};

export default function Nav({ isLoggedIn }: NavProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logos}>
        <Image src={sidebar} alt="Sidebar icon"/>
        <Image src="/images/mttnLogo.png" alt="logo" width={40} height={40} />
      </div>
  
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
