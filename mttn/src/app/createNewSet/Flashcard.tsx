import Card from '../components/Card';
import styles from './Flashcard.module.css';
import AddStudySet from '../components/AddStudySet';
import Image from 'next/image';
import Button from '../components/Button';
import Delete from '../images/x-img.png';

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
                <Button className={styles.button}>
                    <Image src={Delete} alt={"Delete card"} width={50} height={50} />
                </Button>
        
            </div>
        </Card>

    )
}