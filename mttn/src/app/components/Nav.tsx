import styles from './Nav.module.css';
import Link from 'next/link';


export default function Nav() {
    return (
        <nav className={styles.nav}>
            <p>icon</p>
            <Link href = "./login">
                <p className={styles.login}>log in</p>
            </Link>
        </nav>
    )
}