import Card from '../components/Card';
import styles from './Flashcard.module.css';
import AddStudySet from '../components/AddStudySet';
import Image from 'next/image';

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
                <Image src={flashcard.image} alt={flashcard.term} width={100} height={100} priority/>
            </div>
        </Card>

    )
}