"use client";
import { useState } from 'react';
import NewFlashcards from "./CreateNewSet";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Flashcard from './Flashcard';
import Card from '../components/Card';
import Image from 'next/image';


type Flashcard = {
    id: number;
    term: string;
    definition: string;
    image: string;
};

const dummyArr: Flashcard[] = [
    {
        id: 1,
        term: 'term 1',
        definition: 'definition 1', 
        image: 'https://classroomclipart.com/images/gallery/Clipart/Animals/cute-small-baby-red-panda-animal-clipart.jpg',
    },
    {
        id: 2,
        term: 'term 2',
        definition: 'definition 2',
        image: 'https://www.shutterstock.com/image-vector/vector-starfish-icon-under-sea-600nw-2279259637.jpg',
    },
    {
        id: 3,
        term: 'term 3',
        definition: 'definition 3',
        image: 'https://classroomclipart.com/image/static2/preview2/cute-animal-lion-clipart-33697.jpg',
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