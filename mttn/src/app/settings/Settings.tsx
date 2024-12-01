import styles from './Settings.module.css';
import Link from 'next/link';
import Image from 'next/image';

type SettingsProps = {
    // Props type definition
    settings: {
        username:string,
        email:string,
        profilePicture:string,
    }
};

export default function Settings( { settings }: SettingsProps) {

    return (
        <div className={styles.settings}>
            <div className={styles.formWrapper}>
                <h2 className={styles.header}>Settings</h2>
                <div className={styles.innerCard}>
                    <div className={styles.settingAndLink}>
                        <p>Username: {settings.username}</p>
                        <Link href="/changeSettings">Edit</Link>
                    </div>
                    <div className={styles.settingAndLink}>
                        <p>Email: {settings.email}</p>
                        <Link href="/changeSettings">Edit</Link>
                    </div>
                    <div className={styles.settingAndLink}>
                        <p>Change Password</p>
                        <Link href="/changeSettings">Edit</Link>
                    </div>
                </div>
            </div>
            <div className={styles.profilePicture}>
                <Image 
                    className={styles.profileImage}
                    src={settings.profilePicture}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                ></Image>
                <Link href="/changeSettings">Change Profile Picture</Link>
            </div>
        </div>
    )
}