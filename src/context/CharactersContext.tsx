import { createContext, useEffect, useState, type ReactNode } from "react";
import type { Character } from "../utilitis/Types";
import {
    addApiCharacters,
    addLocalCharacters,
    addManualCharacters,
} from "./contextFunctions";

type CharactersContextType = {
    manualCharacters: Character[];
    setManualCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    apiCharacters: Character[];
    setApiCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    localCharacters: Character[];
    setLocalCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    allCharacters: Character[];
    setAllCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
};

export const CharactersContext = createContext<
    CharactersContextType | undefined
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
    console.log(apiCharacters);
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
