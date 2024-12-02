import React, { useEffect } from 'react';
import styles from './StudySet.module.css';
import { useSession } from "next-auth/react";

import { useSetId } from '../context/SetIdContext';

interface StudySetProps {
    title: string;
    id: string;
}

export default function StudySet(props: StudySetProps) {
    const { data: session } = useSession();
    const { setId, updateSetId } = useSetId();
    const userId = session?.user?.id;

    const handleEdit = () => {
        // Insert edit code here
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`/api/users/${userId}/sets/${props.id}`, {
                method: 'DELETE',
            });

            if (!response.body) {
                throw new Error('Network response was not ok...');
            }

        } catch (error) {
            console.log('Error in handleDelete: ', error);
        }
     };

    const handleClick = () => {
        updateSetId(props.id);
        console.log(setId);
    };

    return (
        <div className={styles.studySet} onClick={handleClick}>
                <p>{props.title}</p>
                <button className={styles.editButton}>Edit</button>
                <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
        </div>
    );
}