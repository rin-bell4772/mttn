'use client';

import React, { useState } from 'react';
import styles from './Login.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if ((emailOrUsername === 'user@mttn.com' || emailOrUsername === 'mttn123') && password === '12345') {
      console.log('Login Successful:', { emailOrUsername, password });
      router.push('/dashboard');
    } else {
      setErrorMessage('Invalid email/username or password');
    }

    // Clear input fields after logging in or on failed attempt
    setEmailOrUsername('');
    setPassword('');
  };

  return (
    <div className={styles.login}>
      <div className={styles.formWrapper}>
        <h1 className={styles.header}>Log In</h1>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="emailOrUsername" className={styles.label}>
            Email or Username
          </label>
          <input
            type="text"
            id="emailOrUsername"
            placeholder="Enter your email or username"
            className={styles.inputField}
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
          />

          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className={styles.loginButton}>
            Log in
          </button>
        </form>

        <div className={styles.textWrapper}>
          <Link href="/changePassword" className={styles.forgotPassword}>
            Forgot password?
          </Link>
        </div>

        <div className={styles.textWrapper}>
          <Link href="/createAccount" className={styles.forgotPassword}>
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};
