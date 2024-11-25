"use client";
import React from 'react';
import Image from 'next/image';
import styles from './AddFlashcard.module.css';
import add_icon from '../images/add_icon.png';
import Button from '../components/Button';
import { FormEvent, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../components/Card';


type Cards = {
    id: number;
    term: string;
    definition: string;
    image: string;
}

type AddCardProps = {
    //onAddCard: (cardArray: Cards[]) => void;
    onAddCard: (cardArray: Cards) => void;
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
            // "dummy"user id/set/"dummy"set id
            const response = await fetch('/api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        }
    
        

        /*async function getNewFlashcard() {
            const response = await fetch('api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473', {
                method: 'GET',
            });
            return await response.json();
        }
        
        const data = getNewFlashcard();
        const s1 = JSON.parse(data);
*/
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
        onAddCard(newCard);

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