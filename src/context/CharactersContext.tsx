import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Character, CharacterContextType } from "../utilitis/Types";
import {
    addApiCharacters,
    addLocalCharacters,
    addManualCharacters,
} from "./ContextFunctions";

export const CharactersContext = createContext<
    CharacterContextType | undefined
>(undefined);

const CharactersContextProvider = ({ children }: { children: ReactNode }) => {
    const [manualCharacters, setManualCharacters] = useState<Character[]>([]);
    const [apiCharacters, setApiCharacters] = useState<Character[]>([]);
    const [localCharacters, setLocalCharacters] = useState<Character[]>([]);
    const [allCharacters, setAllCharacters] = useState<Character[]>([]);

    function addAllCharacters() {
        setAllCharacters([
            ...manualCharacters,
            ...apiCharacters,
            ...localCharacters,
        ]);
    }

    useEffect(() => {
        addManualCharacters(setManualCharacters);
        addApiCharacters(setApiCharacters);
        addLocalCharacters(setLocalCharacters);
    }, []);

    useEffect(() => {
        addAllCharacters();
    }, [manualCharacters, localCharacters, apiCharacters]);

    return (
        <CharactersContext.Provider
            value={{
                manualCharacters,
                setManualCharacters,
                apiCharacters,
                setApiCharacters,
                localCharacters,
                setLocalCharacters,
                allCharacters,
                setAllCharacters,
            }}
        >
            {children}
        </CharactersContext.Provider>
    );
};

export default CharactersContextProvider;
