"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    function handleClick() {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.style.width = "0";
        }
    }

    useEffect(() => {
        const sidebar = document.getElementById("sidebar");
        if (sidebar) {
            sidebar.style.transition = "width 0.5s"; 
        }
    }, []);

    return (
        <div id="sidebar" className={styles.sidebar}>
            <div>
                <h1>NAVIGATION</h1>
                <Link href="#" onClick={handleClick} className={styles.closeButton}>&times;</Link>
            </div>
            <Link href="./dashboard">Dashboard</Link>
            <Link href="./settings">Account Settings</Link>
        </div>
    );
}