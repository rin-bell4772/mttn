import React, { useEffect } from 'react';
import styles from './StudySet.module.css';
import { useSession } from "next-auth/react";
import { useSetId } from '../context/SetIdContext';
import { useRouter } from 'next/navigation';

interface StudySetProps {
    title: string;
    id: string;
    onDelete: () => void;
}

export default function StudySet(props: StudySetProps) {
    const { data: session } = useSession();
    const { setId, updateSetId, title, updateTitle } = useSetId();
    const userId = session?.user?.id;
    const router = useRouter();

    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        updateSetId(props.id);
        updateTitle(props.title);
        router.push('/createNewSet');
    };

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        try {
            const response = await fetch(`/api/users/${userId}/sets/${props.id}`, {
                method: 'DELETE',
            });

            if (!response.body) {
                throw new Error('Network response was not ok...');
            }

            props.onDelete();

        } catch (error) {
            console.log('Error in handleDelete: ', error);
        }
     };

    const handleClick = () => {
        updateSetId(props.id);
        router.push('/flashcardSet');
    };

    return (
        <div className={styles.studySet} onClick={handleClick}>
                <p>{props.title}</p>
                <button className={styles.editButton} onClick={handleEdit}>Edit</button>
                <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
        </div>
    );
}