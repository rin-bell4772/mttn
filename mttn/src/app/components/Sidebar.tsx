"use client";
import { useEffect } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
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
                <a onClick={onClose} className={styles.closeButton}>&times;</a>
            </div>
            <Link href="./dashboard">Dashboard</Link>
            <Link href="./settings">Account Settings</Link>
        </div>
    );
}