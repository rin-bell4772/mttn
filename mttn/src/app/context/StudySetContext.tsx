// context/StudySetContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type StudySetContextType = {
    setTitles: string[];
    updateSetTitles: (newTitles: string[]) => void;
};

const StudySetContext = createContext<StudySetContextType | undefined>(undefined);

export const useStudySet = () => {
    const context = useContext(StudySetContext);
    if (!context) {
        throw new Error("useStudySet must be used within a StudySetProvider");
    }
    return context;
};

type StudySetProviderProps = {
    children: ReactNode;
};

export const StudySetProvider = ({ children }: StudySetProviderProps) => {
    const [setTitles, setSetTitles] = useState<string[]>([]);

    const updateSetTitles = (newTitles: string[]) => {
        setSetTitles(newTitles);
    };

    return (
        <StudySetContext.Provider value={{ setTitles, updateSetTitles }}>
            {children}
        </StudySetContext.Provider>
    );
};