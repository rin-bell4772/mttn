"use client";
import React from 'react';
import Image from 'next/image';
import styles from './AddFlashcard.module.css';
import add_icon from '../images/add_icon.png';
import Button from '../components/Button';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Card from '../components/Card';


type Cards = {
    id: number;
    term: string;
    definition: string;
    image: string;
}

type AddCardProps = {
    onAddCard: (card: Cards) => void;
};


export default function AddStudySet({onAddCard}: AddCardProps) {
    const [term, setTerm] = useState<string>('');
    const [definition, setDefinition] = useState<string>('');
    const [image, setImageUrl] = useState<string>('');
    
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        const newCard: Cards = {
            id: Math.random(),
            term,
            definition,
            image,
        };

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