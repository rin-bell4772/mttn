'use client'

import React, { useState } from 'react';
import styles from './ChangeSettings.module.css';
import { useRouter } from 'next/navigation';

type ChangeSettingsProps = {
    settings: {
        email: string,
        username: string,
        profilePicture: string,
    }
}

export default function ChangeSettings({ settings }: ChangeSettingsProps) {
    const [email, setEmail] = useState(settings?.email || '');
    const [username, setUsername] = useState(settings?.username || '');
    const [profilePicture, setProfilePicture] = useState(settings?.profilePicture || '');
    const router = useRouter();

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const profilePictureHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfilePicture(e.target.value);
    }

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Settings changed");
        alert("Settings changed");
        router.push("/settings");
    }

    return (
        <div className={styles.changeSettings}>
            <div className={styles.formWrapper}>
                <h1 className={styles.header}>Change Settings</h1>
                <form className={styles.form} onSubmit={submitHandler}>
                    <label htmlFor="email" className={styles.label}>
                        Email
                    </label>
                    <input className={styles.inputField}
                        type="email"
                        id="email"
                        placeholder="new email"
                        value={email}
                        onChange={emailHandler}
                    />
                    <label htmlFor="username" className={styles.label}>
                        Username
                    </label>
                    <input className={styles.inputField}
                        type="text"
                        id="username"
                        placeholder="new username"
                        value={username}
                        onChange={usernameHandler}
                    />
                    <label htmlFor="profilePicture" className={styles.label}>
                        Profile Picture
                    </label>
                    <input className={styles.inputField}
                        type="text"
                        id="profilePicture"
                        placeholder="enter url"
                        value={profilePicture}
                        onChange={profilePictureHandler}
                    />
                    <button className={styles.changeButton}>Change</button>
                </form>
            </div>
        </div>
    )
}
