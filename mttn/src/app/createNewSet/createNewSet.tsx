"use client"
import styles from './CreateNewSet.module.css';
import Card from '../components/Card';
import Flashcard from './Flashcard';
import Button from '../components/Button';

type Flashcards = {
    id: number;
    term: string;
    definition: string;
};

type cardData = {
    cards: Flashcards[];
};

export default function NewFlashcards({cards}: cardData) {
    return (
       <div>
            <div className={styles.header}>
                <p>UNTITLED</p>
                <p>Save</p>
            </div>

            <div className={styles.cardCSS}>
                {cards.map((card) => (
                    <Flashcard key={card.id} flashcard={card}/>
                ))}
            </div>
            
            
        </div>
    )
}