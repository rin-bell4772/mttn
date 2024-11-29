"use client";
import styles from './CreateNewSet.module.css';
import Card from '../components/Card';
import Flashcard from './Flashcard';
import Button from '../components/Button';
import AddFlashcard from './AddFlashcard';
import Link from 'next/link';
import { useState } from 'react';
import { useStudySet } from '../context/StudySetContext';

type Flashcards = {
    id: number;
    term: string;
    definition: string;
    image: string;
};

type cardData = {
    cards: Flashcards[];
};

export default function NewFlashcards({ cards }: cardData) {
    const [title, setTitle] = useState("ANIMALS");
    const { setTitles, updateSetTitles } = useStudySet();

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleSave = () => {
        if (title && !setTitles.includes(title)) {
            updateSetTitles([...setTitles, title]);
        }
    };

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
                {cards.map((card) => (
                    <Flashcard key={card.id} flashcard={card} />
                ))}
            </div>
        </div>
    );
}

/*
<div className={styles.addCard}>
                <Card>
                    <AddFlashcard onAddCard={}/>
                </Card>
            </div>
*/