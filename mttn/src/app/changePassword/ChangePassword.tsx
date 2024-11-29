"use client"
import { ChangeEvent, useState } from "react";
import styles from "./ChangePassword.module.css";
import { useRouter } from "next/navigation";



export default function ChangePassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();

    const newPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(event.target.value);
    }

    const confirmPasswordHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        /* 
        * This needs to be changed and tested,
        * add the user id somehow
        */
        try {
            const response = await fetch('/api/users/', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newPassword }),
            });

            if (response.ok) {
                console.log("Password changed");
            } else {
                const data = await response.json();
                setError(data.message);
            }
        } catch (err) {
            console.error("Change password error:", err);
            setError("An error occurred while changing your password");
        }

        router.push("/dashboard");
    }
    
    return (
        <div className={styles.changePassword}>
            <div className={styles.formWrapper}>
            <h1 className={styles.header}>Change Password</h1>
                <form className={styles.form} onSubmit={submitHandler}>
                    <label className={styles.label}>
                        <input className={styles.inputField}
                            id="new-password"
                            type="password"
                            placeholder="new password"
                            value={newPassword}
                            onChange={newPasswordHandler}
                        />
                    </label>
                    <label className={styles.label}>
                        <input className={styles.inputField}
                            id="confirm-password"
                            type="password"
                            placeholder="confirm password"
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

function setError(arg0: string) {
    throw new Error("Function not implemented.");
}
