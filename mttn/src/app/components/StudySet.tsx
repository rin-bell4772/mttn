import React from 'react';
import styles from './StudySet.module.css';
import { useSession } from "next-auth/react";

interface StudySetProps {
    title: string;
}

export default function StudySet(props: StudySetProps) {
    const { data: session } = useSession();

    const handleEdit = () => {
        // Insert edit code here
    };

    const handleDelete = () => {
        // Insert delete code here
    };

    const handleClick = () => {
        // Insert code here
    };

    return (
        <div className={styles.studySet} onClick={handleClick}>
                <p>{props.title}</p>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
        </div>
    );
}