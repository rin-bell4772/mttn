"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type SetIdContextType = {
    setTitles: string[];
    setId: string | null;
    updateSetTitles: (newTitles: string[]) => void;
    updateSetId: (newId: string) => void;
};

const SetIdContext = createContext<SetIdContextType | undefined>(undefined);

export const useSetId = () => {
    const context = useContext(SetIdContext);
    if (!context) {
        throw new Error("useSetId must be used within a StudySetProvider");
    }
    return context;
};

type SetIdProviderProps = {
    children: ReactNode;
};

export const SetIdProvider = ({ children }: SetIdProviderProps) => {
    const [setTitles, setSetTitles] = useState<string[]>(["Math", "Science"]);
    const [setId, setSetId] = useState<string | null>(null);

    const updateSetTitles = (newTitles: string[]) => {
        setSetTitles(newTitles);
    };

    const updateSetId = (newId: string) => {
        setSetId(newId);
    };

    return (
        <SetIdContext.Provider value={{ setTitles, setId, updateSetTitles, updateSetId }}>
            {children}
        </SetIdContext.Provider>
    );
};