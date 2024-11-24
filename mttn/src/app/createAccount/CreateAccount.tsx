'use client';

import React, { useState } from 'react';
import styles from './CreateAccount.module.css';
import { useRouter } from 'next/navigation';

export const CreateAccount = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const fields = [
    { id: 'username', label: 'Username', type: 'text', placeholder: 'Enter your username' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
    { id: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit =  async (e: React.FormEvent) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formValues;

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, profilePicture: '' }),
      });

      if (response.ok) {
        console.log("Account created");
        router.push('/login');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (err) {
      console.error('Create account error:', err);
      setError('An error occurred while creating your account');
    }

    console.log('Form Submitted:', formValues);

    // Clear form fields
    setFormValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    setError(''); // Clear any errors
  };

  return (
    <div className={styles.createAccount}>
      <div className={styles.formWrapper}>
        <h1 className={styles.header}>Create Account</h1>

        {error && <div className={styles.error}>{error}</div>}

        <form className={styles.form} onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className={styles.label}>
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                className={styles.inputField}
                value={formValues[field.id as keyof typeof formValues]}
                onChange={handleChange}
              />
            </div>
          ))}

          <button type="submit" className={styles.createAccountButton}>
            Create Account
          </button>
        </form>

        <div className={styles.textWrapper}>
          <a href="/login" className={styles.loginLink}>
            Already have an account? Log in
          </a>
        </div>
      </div>
    </div>
  );
};
