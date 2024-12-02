"use client";
import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import sidebar from '../images/sidebar.png';
import Sidebar from './Sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { doLogout } from '@/app/actions';
import Button from './Button';

import { useSession } from 'next-auth/react';

type NavProps = {
  isLoggedIn: boolean;
};

export default function Nav({ isLoggedIn }: NavProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { data: session, status } = useSession();

  const toggleSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSidebarOpen((prev) => !prev);
  };

  const logout = async () => {
    await doLogout();
  }
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
      {isLoggedIn ? (
        <>
      <Button className={styles.logoutButton} onClick={logout}>  
        <p className={styles.text}>Log out</p>
      </Button> 
      {status === "authenticated" && session?.user?.id && (
            <p>User ID: {session.user.id}</p>
          )}
      </>
      ) : (
      <Link href="/login">
        <p className={styles.text}>Log in</p>
      </Link>
      )
    }

    <Sidebar isOpen={isSidebarOpen} onCloseAction={() => setIsSidebarOpen(false)} />
    </nav>
  );
}
