"use client";
import { useState } from 'react';
import NewFlashcards from "./createNewSet";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


type FlashCard = {
    id: number;
    term: string;
    definition: string;
};

const dummyArr: FlashCard[] = [
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

export default function CreateNewSet() {
    const [cards, setCards] = useState<FlashCard[]>(dummyArr);

    const addCardHandler = (card: FlashCard) => {
        setCards((previousCards) => [...previousCards, card]);
    };

    
    return (
        <>
            <Nav isLoggedIn={true} />
            <NewFlashcards cards={cards}/>
            <Footer />
        </>
    )
}