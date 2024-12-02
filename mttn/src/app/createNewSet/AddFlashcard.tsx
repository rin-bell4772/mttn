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
    const [term, setTerm] = useState<string>('');
    const [definition, setDefinition] = useState<string>('');
    const [image, setImageUrl] = useState<string>('');
    
    
    const submitHandler = (event: FormEvent) => {
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
                const response = await fetch('/api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards', {
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
        


        //const [items, setItems] = useState([]);
        
        /*useEffect(() => {
            const fetchCards = async () => {
                try {
                    const response = await fetch ('api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    const itemData = data.card;
                    /*setItem({
                        term: itemData.term || '',
                        definition: itemData.definition || '',
                        imageUrl: itemData.imageUrl || '',
                    });
                    *//*
                   setTerm(itemData.term);
                   setDefinition(itemData.definition);
                   setImageUrl(itemData.imageUrl);

                } catch (error) {
                    console.log('Error from UpdateItemInfo');
                }
            }
        })*/
       /*
        function getCards() {

            
            const [items, setItems] = useState([]);
            useEffect(() => {
                const fetchItems = async () => {
                    try {
                        const response = await fetch ('api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards');
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const cardjson = await response.json();
                        const cardData = cardjson.cards;
                        //setItems(cardjson.cards);
                        setTerm(cardData.term);
                        setDefinition(cardData.definition);
                        setImageUrl(cardData.imageUrl);
                    } catch (error) {
                        console.log('Error from ShowItemList: ', error);
                    }
                };
                fetchItems();
            }, []);
        }
        //const 
        

        /*const fetchCards = async (userId: string, setId:string) => {
            try {
                const response = await fetch ('api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const cardjson = await response.json();
                return cardjson;
            } catch(error) {
                console.log('Error from ShowItemList: ', error);
                return null;
            }
        }*/
        
        
        //fetchCards('6743ad1daa92502baff9146f', '6743afd2aa92502baff91473');
        

  /*      async function getCards() {
            //const [items, setItems] = useState([]);

            useEffect(() => {
                const fetchItems = async () => {
                    try {

                        const response = await fetch('api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards');
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        const data = await response.json();
                        
                        setItems(data.items);
                        //onAddCard(data.items);
                        console.log(items);
                        
                    } catch (error) {
                        console.log('Error from ShowItemList: ', error);
                    }
                };
                fetchItems();
            }, []);
        }
        console.log(items);*/
        
     //console.log(getCards());
        /*
        const [items, setItems] = useState([]);

        useEffect(() => {
            const fetchItems = async () => {
                try {
                    const response = await fetch('api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    
                    setItems(data.items);
                    //onAddCard(data.items);
                } catch (error) {
                    console.log('Error from ShowItemList: ', error);
                }
            };
            fetchItems();
        }, []);

        //onAddCard(items);
        */
        //onAddCard(newCard);
        
        setTerm('');
        setDefinition('');
        setImageUrl('');
    };
    /*
    function getCards() {

            
        const [items, setItems] = useState([]);
        useEffect(() => {
            const fetchItems = async () => {
                try {
                    const response = await fetch ('api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards');
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const cardjson = await response.json();
                    const cardData = cardjson.cards;
                    //setItems(cardjson.cards);
                    setTerm(cardData.term);
                    setDefinition(cardData.definition);
                    setImageUrl(cardData.imageUrl);
                } catch (error) {
                    console.log('Error from ShowItemList: ', error);
                }
            };
            fetchItems();
        }, []);
    }
    getCards();
    */
    interface CardData {
        term: string;
        email: string;
        imageUrl?: string;
    }

    const [cardData, setCardData] = useState<CardData | null>(null);
    const fetchCards = async (userId: string, setId:string) => {
        try {
            const response = await fetch ('api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const cardjson = await response.json();
            return cardjson;
        } catch(error) {
            console.log('Error from ShowItemList: ', error);
            return null;
        }
    }
    console.log(fetchCards("6743ad1daa92502baff9146f", "6743afd2aa92502baff91473"));

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