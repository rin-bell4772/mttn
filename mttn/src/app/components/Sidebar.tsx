"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    function closeSidebar() {
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
                <a href="#" onClick={closeSidebar} className={styles.closeButton}>&times;</a>
            </div>
            <Link href="./dashboard">Dashboard</Link>
            <Link href="./settings">Account Settings</Link>
        </div>
    );
}