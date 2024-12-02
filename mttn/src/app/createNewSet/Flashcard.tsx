import Card from '../components/Card';
import styles from './Flashcard.module.css';
import AddStudySet from '../components/AddStudySet';
import Image from 'next/image';
import Button from '../components/Button';
import Delete from '../images/x-img.png';
import { FormEvent, useState, useEffect } from 'react';

// eek

type FlashcardProps = {
    flashcard: {
        id: number;
        term: string;
        definition: string;
        image: string;
    }
}

export default function Flashcard({flashcard}: FlashcardProps) {
    const deleteHandler = (event: FormEvent) => {
        event.preventDefault();

        const onDeleteClick = async () => {
            try {
                const response = await fetch('/api/users/6743ad1daa92502baff9146f/sets/6743afd2aa92502baff91473/cards/', {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                //router.push('/');
            } catch (error) {
                console.log('Error in deleteClick');
            }
        }
    }
    
    
    return (
        <Card>
            <div className={styles.cardCSS}>
                <p>{flashcard.term}</p>
                <p>{flashcard.definition}</p>
                <Image 
                    src={flashcard.image}
                    alt={flashcard.term}
                    width={100} height={100}
                    priority
                />
                <Button className={styles.button} /*</div>type="submit" onClick={deleteHandler}*/>
                    <Image src={Delete} alt={"Delete card"} width={50} height={50} />
                </Button>
        
            </div>
        </Card>

    )
}