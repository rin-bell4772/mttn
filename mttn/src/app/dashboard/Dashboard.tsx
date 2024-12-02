"use client";
import styles from './Dashboard.module.css';
import AddStudySet from '../components/AddStudySet';
import StudySet from '../components/StudySet';
// import { useStudySet } from '../context/StudySetContext';
import { useSession } from "next-auth/react";
import { useState, useEffect } from 'react';

interface StudySet {
    _id: string;
    name: string;
}

export default function Dashboard() {
    const [studySets, setStudySets] = useState<StudySet[]>([]);
    const { data: session } = useSession();
    const userId = session?.user?.id;

    const fetchStudySets = async () => {
        try {
            if (!userId) {
                console.error("User ID is not available");
                return;
            }       

            const response = await fetch(`/api/users/${userId}/sets`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
                
            const data = await response.json();
            setStudySets(data.sets);
        } catch (error) {
            console.error("Error fetching study sets:", error);
        }
    }

    // GET request for all sets
    useEffect(() => {
        fetchStudySets();
    }, [session]);

    return (
        <div className={styles.dashboard}>
            <h1>ALL</h1>
            <div className={styles.grid}>
                <AddStudySet />
                {studySets.map((set, index) => (
                    <StudySet key={index} id={set._id} title={set.name} onDelete={fetchStudySets} />
                ))}
            </div>
        </div>
    );
}
