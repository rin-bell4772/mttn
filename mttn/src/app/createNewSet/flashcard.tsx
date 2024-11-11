import Card from '../components/Card';
import styles from './Flashcard.module.css';
import AddStudySet from '../components/AddStudySet';

type FlashcardProps = {
    flashcard: {
        id: number;
        term: string;
        definition: string;
    }
}

export default function Flashcard({flashcard}: FlashcardProps) {
    return (
        <Card>
            <div className={styles.cardCSS}>
                <p>{flashcard.term}</p>
                <p>{flashcard.definition}</p>
            </div>
        </Card>

    )
}