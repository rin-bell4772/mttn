"use client";
import { useState } from 'react';
import NewFlashcards from "./createNewSet";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Flashcard from './Flashcard';
import Card from '../components/Card';
import Image from 'next/image';
import AddFlashcard from './AddFlashcard';
import styles from './page.module.css'


type Flashcard = {
    id: string;
    term: string;
    definition: string;
    image: string;
};

const dummyArr: Flashcard[] = [
    {
        id: '1',
        term: 'Red Panda',
        definition: 'Mammal that is cute!', 
        image: 'https://classroomclipart.com/images/gallery/Clipart/Animals/cute-small-baby-red-panda-animal-clipart.jpg',
    },
    {
        id: '2',
        term: 'Starfish',
        definition: 'In the ocean omg',
        image: 'https://www.shutterstock.com/image-vector/vector-starfish-icon-under-sea-600nw-2279259637.jpg',
    },
    {
        id: '3',
        term: 'Lion',
        definition: 'Lion king is a rlly good movie',
        image: 'https://classroomclipart.com/image/static2/preview2/cute-animal-lion-clipart-33697.jpg',
    },
];


export default function CreateNewSet(): JSX.Element {
    const [cards, setCards] = useState<Flashcard[]>(dummyArr);

    
    const addCardHandler = (cardArray: Flashcard[]) => {
        //setCards((previousCards) => [...previousCards, card]);
        
        setCards(() => cardArray);

    };
    

    
    return (
        <div className={styles.addSet}>
            <Nav isLoggedIn={true} />
            <div className={styles.card}>
                <NewFlashcards cards={cards}/>
            </div>
            {/*<AddFlashcard onAddCard={addCardHandler}/>*/}
            <Footer />
        </div>
    );
}