'use client'

import React, { useState, ChangeEvent } from 'react';
import styles from './ChangeSettings.module.css';
import { useRouter } from 'next/navigation';
import bcrypt from "bcryptjs";

import { useSession } from 'next-auth/react';

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
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter();

    const { data: session } = useSession();


    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const profilePictureHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProfilePicture(e.target.value);
    }

    const newPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value);
    }

    const confirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
    }

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!session?.user?.id) {
            console.error("User ID is not available");
            return;
        }

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const updateData: {
            username: string;
            email: string;
            profilePicture: string;
            password?: string;
        } = {
            username,
            email,
            profilePicture,
        };

        if (newPassword) {
            updateData.password = newPassword;
        }

        try {
            const response = await fetch(`/api/users/${session.user.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateData),
            });

            if (response.ok) {
                console.log("Settings updated successfully");
            } else {
                const data = await response.json();
                console.error("Error updating settings:", data.message);
            }
        } catch (error) {
            console.error("An error occurred while updating settings:", error);
        }
        router.push("/settings");
    };

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
                    <label htmlFor="password" className={styles.label}>
                        Password
                    </label>
                    <label className={styles.label}>
                        <input className={styles.inputField}
                            id="new-password"
                            type="password"
                            placeholder="new password (leave empty to keep the current password)"
                            value={newPassword}
                            onChange={newPasswordHandler}
                        />
                    </label>
                    <label className={styles.label}>
                        <input className={styles.inputField}
                            id="confirm-password"
                            type="password"
                            placeholder="confirm password (leave empty to keep the current password)"
                            value={confirmPassword}
                            onChange={confirmPasswordHandler}
                        />
                    </label>
                    <button className={styles.changeButton}>Change</button>
                </form>
            </div>
        </div>
    )
}
