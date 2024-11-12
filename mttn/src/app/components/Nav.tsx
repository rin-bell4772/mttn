"use client";
import styles from './Nav.module.css';
import Link from 'next/link';
import Image from 'next/image';
import sidebar from '../images/sidebar.png';
import Sidebar from './Sidebar';
import { useState } from 'react';

type NavProps = {
  // add props here
  isLoggedIn: boolean;
};

export default function Nav({ isLoggedIn }: NavProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logos}>
          {isLoggedIn && (
            <a href="#" onClick={toggleSidebar}>
              <Image src={sidebar} alt="Sidebar icon" />
            </a>
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
    {isSidebarOpen && <Sidebar />}
    </nav>
  );
}
