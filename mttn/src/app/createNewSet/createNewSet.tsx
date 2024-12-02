"use client";
import styles from './CreateNewSet.module.css';
import Card from '../components/Card';
import Flashcard from './Flashcard';
import Button from '../components/Button';
import AddFlashcard from './AddFlashcard';
import Link from 'next/link';
import { useState, FormEvent, useEffect } from 'react';
import { useStudySet } from '../context/StudySetContext';
import { useSession } from "next-auth/react";
import { useSetId } from '../context/SetIdContext';

type Flashcards = {
    id: string;
    term: string;
    definition: string;
    image: string;
};

type cardData = {
    cards: Flashcards[];
};

export default function NewFlashcards({ cards }: cardData, props: Flashcards) {
    const [title, setTitle] = useState("Animals");
    // const { setTitles, updateSetTitles } = useStudySet();
    const { data: session } = useSession();
    const userId = session?.user?.id;
    const { setId, updateSetId } = useSetId();

    // Changes title of study set (keep this)
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    // Whenever you hit 'Save', you take the title & create a set (modify name with title)
    const handleSave = async () => {

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
                setTitle(""); 
            }
        } catch (error) {
            console.error("Error handling save:", error);
        }
    };

    // POST request for dashboard
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

    // GET REQUEST
    interface CardData {
        id: number;
        term: string;
        definition: string;
        image: string;
    }

    const [cardData, setCardData] = useState<CardData[]>([]);

    //useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch (`api/users/${userId}/sets/${props.id}/cards`);
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                setCardData(data.cards);
            
            } catch(error) {
                console.error("Error fetching cards: ", error);
            }
            
        }
        fetchCards();
    //}, []);
    useEffect(() => {fetchCards()}, []);

    return (
        <div>
            <div className={styles.header}>
                <input
                    type="text"
                    value={title}
                    onChange={handleTitleChange}
                    className={styles.titleInput}
                    placeholder="Enter a title"
                />
                <Link href="./flashcardSet">
                    <Button className={styles.button} type="button" onClick={handleSave}>
                        Save
                    </Button>
                </Link>
            </div>

            <div>
                {cardData.map((card, index) => (
                    <Flashcard key={index} flashcard={card} />
                ))}
            </div>
        </div>
    );
}