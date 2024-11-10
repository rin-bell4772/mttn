import React, { useState } from 'react';
import Option from './Option';

type OptionType = {
    text: string;
    isCorrect: boolean;
    onAnswer: (isCorrect: boolean) => void;
};

type QuestionProps = {
    question: {
        id: number;
        qstn: string;
        answer: string;
        options: OptionType[];
    };
    onAnswer: (isCorrect: boolean) => void;
};

export default function Question({ question, onAnswer }: QuestionProps) {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelect = (optionText: string, isCorrect: boolean) => {
        setSelectedOption(optionText);
        onAnswer(isCorrect);
    };

    return (
        <div className="question">
            <p>{question.id}. {question.qstn}</p>
            {question.options.map((option) => (
                <Option
                    key={option.text}
                    option={option}
                    isSelected={selectedOption === option.text}
                    onSelect={() => handleSelect(option.text, option.isCorrect)}
                />
            ))}
        </div>
    );
}