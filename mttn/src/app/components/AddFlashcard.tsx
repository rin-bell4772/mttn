import React from 'react';
import Image from 'next/image';
import styles from './AddFlashcard.module.css';
import add_icon from '../images/add_icon.png';

export default function AddStudySet() {
    return (
        <div className={styles.addFlashcard}>
            <Image src={add_icon} alt="Add Icon"/>
        </div>
    );
}