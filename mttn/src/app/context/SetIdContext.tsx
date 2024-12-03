"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type SetIdContextType = {
    title: string | null;
    setId: string | null;
    updateTitle: (newTitles: string) => void;
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
    const [title, setTitle] = useState<string | null>(null);
    const [setId, setSetId] = useState<string | null>(null);

    const updateTitle = (newTitle: string) => {
        setTitle(newTitle);
    };

    const updateSetId = (newId: string) => {
        setSetId(newId);
    };

    return (
        <SetIdContext.Provider value={{ title, setId, updateTitle, updateSetId }}>
            {children}
        </SetIdContext.Provider>
    );
};