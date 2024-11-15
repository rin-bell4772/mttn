"use client"
import styles from './CreateNewSet.module.css';
import Card from '../components/Card';
import Flashcard from './Flashcard';
import Button from '../components/Button';
import AddFlashcard from '../components/AddFlashcard';
import Link from 'next/link';

type Flashcards = {
    id: number;
    term: string;
    definition: string;
    image: string;
};

type cardData = {
    cards: Flashcards[];
};

export default function NewFlashcards({cards}: cardData) {
    return (
       <div>
            <div className={styles.header}>
                <p>ANIMALS</p>
                <Link href="./flashcardSet">Save</Link>
            </div>

            <div>
                {cards.map((card) => (
                    <Flashcard key={card.id} flashcard={card}/>
                ))}
                
            </div>
            
            <div className={styles.addCard}>
                <Card>
                    <AddFlashcard />
                </Card>
            </div>
            
        </div>
    )
}