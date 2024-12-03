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
    id: number;
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
    const { setId } = useSetId();
    const [cardData, setCardData] = useState<CardData[]>([]);

    // Changes title of study set (keep this)
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    // PUT REQUEST FOR SETS
    const handleSave = async () => {
        try {
            console.log(props.id);
            const response = await fetch(`/api/users/${userId}/sets/${props.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(title),
            });
            return await response.json();
        } catch (error) {
            console.error("Error in handleSave: ", error);
        }
    };

    // GET REQUEST
    interface CardData {
        id: number;
        term: string;
        definition: string;
        image: string;
    }

    const fetchCards = async () => {
        // if (!userId || !setId) {
        //     console.error("User ID or Set ID is not available");
        //     return;
        // }

        try {
            console.log("props id", props.id);
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

    useEffect(() => { 
        if(setId) {
            fetchCards()
        }
    }, [userId]);

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