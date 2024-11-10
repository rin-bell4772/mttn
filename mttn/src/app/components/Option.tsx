import React, { useState } from 'react';

type optionProps = {
    option:{
        text: string;
        isCorrect: boolean;
        onAnswer: (isCorrect: boolean) => void;
    }
    isSelected: boolean;
    onSelect: () => void;
};


export default function Option({ option, isSelected, onSelect }: optionProps) {
    const handleChange = () => {
        onSelect();
        option.onAnswer(option.isCorrect);
    };

    return (
        <label>
            <input
                type="radio"
                checked={isSelected}
                onChange={handleChange}
            />
            {option.text}
        </label>
    );
}
/** 
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(true);
        option.onAnswer(option.isCorrect);
    };

    return (
        <button onClick={handleClick}>{option.text}</button>
    )
}
    */