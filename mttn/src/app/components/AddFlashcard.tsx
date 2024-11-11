"use client";
import React from 'react';
import Image from 'next/image';
import styles from './AddFlashcard.module.css';
import add_icon from '../images/add_icon.png';

export default function AddStudySet() {
    return (
        <div className={styles.addFlashcard}>
        
           <input className={styles.information}
                id="term"
                type="text"
                placeholder="Term"
                //value={}
                //onChange
            />
            <input className={styles.information} 
                id="definition"
                type="text"
                placeholder="Definition"
                //value
                //onChange
            />
            <input className={styles.information}
                id="imageLink"
                type="url"
                placeholder="Image URL"
            />

            <Image src={add_icon} alt="Add Icon"/>
        </div>
    );
}