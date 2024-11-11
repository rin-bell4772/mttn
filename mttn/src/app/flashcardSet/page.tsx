"use client";
import { useState } from 'react';
import FlashCard from './flashcardSet';
import Nav from '../components/Nav';
import Footer from '../components/Footer';



export default function FlashcardSet(): JSX.Element {
    
    return (
        <>
            <Nav isLoggedIn={true}/>
            <FlashCard />
            <Footer />
        </>
    )
}