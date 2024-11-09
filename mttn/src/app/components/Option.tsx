type optionProps = {
    option:{
        text: string;
        isCorrect: boolean;
        onAnswer: (isCorrect: boolean) => void;
    }
}


export default function Option({ option }: optionProps) {

    const handleClick = () => {
        option.onAnswer(option.isCorrect);
    };

    return (
        <button onClick={handleClick}>{option.text}</button>
    )
}