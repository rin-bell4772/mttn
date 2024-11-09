import Option from './Option';

type Option = {
    text: string;
    isCorrect: boolean;
    onAnswer: (isCorrect: boolean) => void;
}

type QuestionProps = {
    question: {
        id: number;
        qstn: string;
        answer: string;
        options: Option[];
    }
}

export default function Question( { question }: QuestionProps) {
    return (
        <div className="question">
            <p> {question.id}. {question.qstn}</p>
            {question.options.map((option) => (
                <Option
                    key={option.text}
                    option= {{
                        text: option.text,
                        isCorrect: option.isCorrect,
                        onAnswer: option.onAnswer
                    }}
                />
            ))}
        </div>

    )
}