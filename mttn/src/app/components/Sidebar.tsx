"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
    isOpen: boolean;
    onCloseAction: () => void;
}

export default function Sidebar({ isOpen, onCloseAction }: SidebarProps) {
    return (
        <div 
        id="sidebar" 
        className={styles.sidebar} 
        style={{ 
            width: isOpen ? "25%" : "0",
            transition: "width 0.4s",
        }}>
            <div>
                <h1>NAVIGATION</h1>
                <a href="#" onClick={onCloseAction} className={styles.closeButton}>&times;</a>
            </div>
            <Link href="./dashboard">Dashboard</Link>
            <Link href="./settings">Account Settings</Link>
        </div>
    );
}