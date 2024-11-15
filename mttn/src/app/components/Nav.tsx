"use client";
import { useState } from 'react';
import styles from './Nav.module.css';
import sidebar from '../images/sidebar.png';
import Sidebar from './Sidebar';
import Link from 'next/link';
import Image from 'next/image';

type NavProps = {
  isLoggedIn: boolean;
};

export default function Nav({ isLoggedIn }: NavProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logos}>
          {isLoggedIn && (
            <button onClick={toggleSidebar}>
              <Image src={sidebar} alt="Sidebar icon" />
            </button>
          )}
          {isLoggedIn ?
            <Link href='/dashboard'>
              <Image src="/images/mttnLogo.png" alt="logo" width={40} height={40} />
            </Link>
            :
            <Link href='/'>
              <Image src="/images/mttnLogo.png" alt="logo" width={40} height={40} />
            </Link>
          }
        
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

    <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </nav>
  );
}
