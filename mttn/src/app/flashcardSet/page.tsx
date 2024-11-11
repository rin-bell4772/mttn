"use client";
import { useState } from 'react';
import FlashCard from './flashcardSet';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

type FlashCard = {
    term: string;
    definition: string;
};

const dummyArr: FlashCard[] = [
    {
        term: 'term 1',
        definition: 'definition 1', 
    },
    {
        term: 'term 2',
        definition: 'definition 2',
    },
    {
        term: 'term 3',
        definition: 'definition 3',
    },
];

export default function FlashcardSet(): JSX.Element {
    const [cards, setCards] = useState<FlashCard[]>(dummyArr);


    return (
        <>
            <Nav isLoggedIn={true}/>
            <FlashCard />
            <Footer />
        </>
    )
}