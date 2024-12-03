"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type SetIdContextType = {
    setTitle: string | null;
    setId: string | null;
    updateSetTitle: (newTitles: string) => void;
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
    const [setTitle, setSetTitle] = useState<string | null>(null);
    const [setId, setSetId] = useState<string | null>(null);

    const updateSetTitle = (newTitle: string) => {
        setSetTitle(newTitle);
    };

    const updateSetId = (newId: string) => {
        setSetId(newId);
    };

    return (
        <SetIdContext.Provider value={{ setTitle, setId, updateSetTitle, updateSetId }}>
            {children}
        </SetIdContext.Provider>
    );
};