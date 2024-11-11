import Card from '../components/Card';

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
            <div>
                <p>{flashcard.term}</p>
                <p>{flashcard.definition}</p>
            </div>
        </Card>
    )
}