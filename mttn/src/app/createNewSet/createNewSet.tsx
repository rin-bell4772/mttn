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

export default function NewFlashcards({ cards }: cardData) {
    // const { setTitles, updateSetTitles } = useStudySet();
    const { data: session } = useSession();
    console.log('Session object:', session);
    const userId = session?.user?.id;
    const { setId, title, updateTitle } = useSetId();
    console.log("setId in createNewSet:", setId);
    const [cardData, setCardData] = useState<CardData[]>([]);

    // Changes title of study set (keep this)
    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateTitle(e.target.value);
        console.log("Updated title:", e.target.value);
    };
    
    // PUT REQUEST FOR SETS
    const handleSave = async () => {
        try {
            if (!userId) {
                console.error('User ID is not available. Check session.');
                return;
            }
            if (!setId) {
                console.error("Set ID is not defined");
                return;
            }
            const response = await fetch(`/api/users/${userId}/sets/${setId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: title }),
                
            });
            return await response.json();
        } catch (error) {
            console.error("Error in handleSave: ", error);
        }
    };

    useEffect(() => {
        console.log("Title updated to:", title);
    }, [title]);

    // GET REQUEST
    interface CardData {
        id: string;
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
            //console.log("props id", props.id);
            const response = await fetch (`api/users/${userId}/sets/${setId}/cards`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            setCardData(data.cards);
            //console.log(data);
        
        } catch(error) {
            console.error("Error fetching cards: ", error);
        }
        
    }

    useEffect(() => {
        fetchCards();
    }, [session]);

    /*useEffect(() => { 
        if (setId) {
            fetchCards()
        }
    }, [userId, setId]);*/
    
    

    const addCardHandler = (cardArray: Flashcards[]) => {
        //setCards((previousCards) => [...previousCards, card]);
        //console.log("HIASKDFJSLFLSJFI");
        setCardData(() => cardArray);

    };
    

    return (
        <div>
            <div className={styles.header}>
                <input
                    type="text"
                    value={ title || '' }
                    onChange={handleTitleChange}
                    className={styles.titleInput}
                    placeholder="Enter a title"
                />
                { /* LINK IT TO FLASHCARD SET PAGE */ }
                <Button className={styles.button} type="button" onClick={handleSave}>
                    Save
                </Button>
            </div>

            <div>
                {cardData.map((card, index) => (
                    <Flashcard key={index} flashcard={card} />
                ))}
                <AddFlashcard onAddCard={fetchCards}/>{/*addCardHandler}/>*/}
            </div>
        </div>
    );
}