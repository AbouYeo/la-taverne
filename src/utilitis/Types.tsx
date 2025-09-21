type Character = {
    id: string;
    name: string;
    image: string;
    health: number;
    magic: number;
    power: number;
    side: string;
    from: string;
};
type CharacterContextType = {
    manualCharacters: Character[];
    setManualCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    apiCharacters: Character[];
    setApiCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    localCharacters: Character[];
    setLocalCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
    allCharacters: Character[];
    setAllCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
};

export type { Character, CharacterContextType };
