"use client";
import React from 'react';
import Image from 'next/image';
import styles from './AddFlashcard.module.css';
import add_icon from '../images/add_icon.png';
import Button from '../components/Button';
import { FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../components/Card';
import { create } from 'domain';
//import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
//import fetchCards from './CreateNewSet';
import {useSetId} from '../context/SetIdContext';


type Cards = { 
    id: number;
    term: string;
    definition: string;
    image: string;
}

type AddCardProps = {
    onAddCard: (cardArray: Cards[]) => void;
    //onAddCard: (cardArray: Cards) => void;
};


export default function AddStudySet({onAddCard}: AddCardProps) {
    const {data: session} = useSession();
    const userId = session?.user?.id;

    const [term, setTerm] = useState<string>('');
    const [definition, setDefinition] = useState<string>('');
    const [image, setImageUrl] = useState<string>('');
    
    interface CardData {
        id: string;
        term: string;
        definition: string;
        image: string;
    }
    const [cardData, setCardData] = useState<CardData[]>([]);

    

    const submitHandler = (event: FormEvent, props: CardData) => {
        event.preventDefault();

        if (!term || !definition) {
            alert("Both term and definition are required to add a flashcard!");
            return;
        }

        // replace with POST request
        const newCard: Cards = {
            id: Math.random(),
            term,
            definition,
            image,
        };
        
        
        async function createNewFlashcard(data: {term: string, definition: string, image: string}) {
            try {
                if (!userId) {
                    console.error("User ID is not available");
                    return;
                }


                const response = await fetch(`/api/users/${userId}/sets/674be216fa52ad698391058b/cards`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {throw new Error('ERROR');}

                setTerm('');
                setDefinition('');
                setImageUrl('');

                //router.push('/');
            } catch (error) {
                console.error('Error in CreateItem!', error);
            }
        }
        
        createNewFlashcard(newCard);  
        
        //useEffect(() => {
            const fetchCards = async () => {
                try {
                    const response = await fetch (`api/users/${userId}/sets/674be216fa52ad698391058b/cards`);
                    
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    
                    const data = await response.json();
                    setCardData(data.cards);
                
                } catch(error) {
                    console.error("Error fetching cards: ", error);
                }
                
            }
            fetchCards();
        //}, []);  
        //createNewFlashcard(newCard);  
        useEffect(() => {fetchCards}, []);
        //onAddCard(newCard);
        
        setTerm('');
        setDefinition('');
        setImageUrl('');

        

    };
    
   

    return (
       
        <div className={styles.addFlashcard}> 
            
           <Card>
                <form onSubmit={submitHandler}>
                    <input className={styles.information}
                        id="term"
                        type="text" 
                        placeholder="Term"   
                        value={term}
                        onChange={(event) => setTerm(event.target.value)}
                    />
                    <input className={styles.information} 
                        id="definition"
                        type="text"
                        placeholder="Definition"
                        //value
                        //onChange
                        value={definition}
                        onChange={(event) => setDefinition(event.target.value)}
                    />
                    <input className={styles.information}
                        id="imageLink"
                        type="url"
                        placeholder="Image URL"
                        value={image}
                        onChange={(event) => setImageUrl(event.target.value)}

                    />
                    <Button type="submit" className={styles.button}>
                        <Image src={add_icon} alt="Add Icon"/>
                    </Button>
                </form>  
                
            </Card>
        </div>
        
    );
}