import React, { useState } from 'react';
import Question from './Question';

type OptionType = {
    text: string;
    isCorrect: boolean;
    onAnswer: (isCorrect: boolean) => void;
}

type QuestionType = {
    id: number;
    qstn: string;
    answer: string;
    options: OptionType[];
}

const exampleQuestions: QuestionType[] = [
    {
        id: 1,
        qstn: "select A",
        answer: "A",
        options: [
            {
                text: "A",
                isCorrect: true,
                onAnswer: (isCorrect: boolean) => {
                    console.log(`Correct: ${isCorrect}`);
                }
            },
            {
                text: "B",
                isCorrect: false,
                onAnswer: (isCorrect: boolean) => {
                    console.log(`Correct: ${isCorrect}`);
                }
            },
            {
                text: "C",
                isCorrect: false,
                onAnswer: (isCorrect: boolean) => {
                    console.log(`Correct: ${isCorrect}`);
                }
            },
            {
                text: "D",
                isCorrect: false,
                onAnswer: (isCorrect: boolean) => {
                    console.log(`Correct: ${isCorrect}`);
                }
            }
        ]
}
]

export default function Quiz() {
    const [score, setScore] = useState(0);

    const handleAnswer = (isCorrect: boolean) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
    };

    return (
        <div>
            {exampleQuestions.map((question) => (
                <Question
                    key={question.id}
                    question={question}
                    onAnswer={handleAnswer}
                />
            ))}
            <p>Score: {score}</p>
        </div>
    )
}