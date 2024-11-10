import Link from 'next/link';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div>
                <h1>NAVIGATION</h1>
                <Link href="">X</Link> { /* Change later */ }
            </div>
            <Link href="./dashboard">Dashboard</Link>
            <Link href="./settings">Account Settings</Link>
            <Link href="./stats">Stats</Link>
        </div>
    );
}