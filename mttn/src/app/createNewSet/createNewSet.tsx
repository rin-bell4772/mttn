"use client"
import styles from './CreateNewSet.module.css';
import Card from '../components/Card';
import Flashcard from './Flashcard';
import Button from '../components/Button';
import AddFlashcard from '../components/AddFlashcard';


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

            <div>
                {cards.map((card) => (
                    <Flashcard key={card.id} flashcard={card}/>
                ))}
            </div>
            
            <Card>
                <AddFlashcard />
            </Card>
            
        </div>
    )
}