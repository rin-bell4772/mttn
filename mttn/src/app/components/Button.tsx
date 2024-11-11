import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  children,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
