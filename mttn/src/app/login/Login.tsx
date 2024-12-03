'use client';

import React, { useState } from 'react';
import styles from './Login.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { doCredentialLogin } from '@/app/actions';
import mongoose from 'mongoose';

type formData = {
  username: string;
  password: string;
}

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await doCredentialLogin(formData);
      if (response.success) {
        console.log('doCredLoginResponse', response);
        router.push('/dashboard');
      } else {
        setErrorMessage('Invalid email or password');
      }
    } catch (err) {
      setErrorMessage('An error occurred during login');
    }

    // Clear input fields after logging in or on failed attempt
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.login}>
      <div className={styles.formWrapper}>
        <h1 className={styles.header}>Log In</h1>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}

        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            className={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
