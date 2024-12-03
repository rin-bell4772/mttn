import React from 'react';
import Link  from 'next/link';
import Image from 'next/image';
import styles from './AddStudySet.module.css';
import add_icon from '../images/add_icon.png';
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import { useSetId } from '../context/SetIdContext';
import { useState } from 'react';

interface StudySetProps {
    title: string;
    id: string;
}

export default function AddStudySet(props: StudySetProps) {
    const [title, setTitle] = useState("Untitled");
    const { data: session } = useSession();
    const userId = session?.user?.id;
    const { setId, updateSetId } = useSetId();
    const router = useRouter();

    const handleClick = async () => {
        if (!userId) {
            console.error("User ID is not available");
            return;
        }
    
        if (!title.trim()) {
            console.error("Title cannot be empty");
            return;
        }

        try {
            const newSet = await createSet(userId, title); 
            if (newSet) {
                console.log("New set saved:", newSet);
                setTitle("Untitled"); 
            }
        } catch (error) {
            console.error("Error handling save:", error);
        }

        updateSetId(props.id);
        router.push('/createNewSet');
    };

    const createSet = async (userId: string, title: string) => {
        try {
            const response = await fetch(`api/users/${userId}/sets`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: title }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Set created successfully:", data);
            return data;
        } catch (error) {
            console.error('Create set error:', error);
        }
    }
    
    return (
        <Link href="../createNewSet">
            <div className={styles.addStudySet} onClick={handleClick}>
                    <Image src={add_icon} alt="Add Icon"/>
            </div>
        </Link>
    );
}