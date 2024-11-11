"use client";
import { useState } from 'react';
import NewFlashcards from "./CreateNewSet";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Flashcard from './Flashcard';



type Flashcard = {
    id: number;
    term: string;
    definition: string;
};

const dummyArr: Flashcard[] = [
    {
        id: 1,
        term: 'term 1',
        definition: 'definition 1', 
    },
    {
        id: 2,
        term: 'term 2',
        definition: 'definition 2',
    },
    {
        id: 3,
        term: 'term 3',
        definition: 'definition 3',
    },
];

export default function CreateNewSet(): JSX.Element {
    const [cards, setCards] = useState<Flashcard[]>(dummyArr);

    const addCardHandler = (card: Flashcard) => {
        setCards((previousCards) => [...previousCards, card]);
    };

    
    return (
        <>
            <Nav isLoggedIn={true} />
            <NewFlashcards cards={cards}/>
            <Footer />
        </>
    );
}