import React from 'react';
import Link  from 'next/link';
import Image from 'next/image';
import styles from './AddStudySet.module.css';
import add_icon from '../images/add_icon.png';

export default function AddStudySet() {
    return (
        <Link href="../flashcardSet">
            <div className={styles.addStudySet}>
                    <Image src={add_icon} alt="Add Icon"/>
            </div>
        </Link>
    );
}