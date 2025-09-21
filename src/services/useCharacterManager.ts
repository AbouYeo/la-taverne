import { toast } from "react-toastify";
import type { Character } from "../utilitis/Types";
import { useCharactersContext } from "../utilitis/useCharactersContext";

export function useCharacterManager() {
    const {
        manualCharacters,
        setManualCharacters,
        localCharacters,
        setLocalCharacters,
        apiCharacters,
        setApiCharacters,
    } = useCharactersContext();

    function findCharacterById(id: string) {
        const sources = [
            { data: manualCharacters, from: "manual" },
            { data: localCharacters, from: "local" },
            { data: apiCharacters, from: "api" },
        ];

        for (const { data, from } of sources) {
            const character = data.find((char) => char.id === id);
            if (character) {
                return { character, from };
            }
        }
        return undefined;
    }

    function deleteCharacterLocalStorage(id: string) {
        const character = findCharacterById(id);
        if (character) {
            const charactersString = localStorage.getItem("characters");
            const storedCharacters = charactersString
                ? JSON.parse(charactersString)
                : [];
            const filteredCharacters = storedCharacters.filter(
                (character: Character) => character.id !== id
            );
            localStorage.setItem(
                "characters",
                JSON.stringify(filteredCharacters)
            );
            setLocalCharacters(filteredCharacters);
        } else {
            toast.error("Combattant non trouvé");
        }
    }
    function deleteCharacter(id: string) {
        const characterData = findCharacterById(id);

        switch (characterData?.from) {
            case "manual":
                setManualCharacters(
                    manualCharacters.filter((character) => character.id !== id)
                );
                break;
            case "local":
                deleteCharacterLocalStorage(id);
                break;
            case "api":
                setApiCharacters(
                    apiCharacters.filter(
                        (character) => String(character.id) !== String(id)
                    )
                );
                break;
            default:
                console.error("La provenance du combattant est inconnu.");
        }
    }

    function updateCharacter(id: string, updatedCharacter: Character) {
        const charactersString = localStorage.getItem("characters");
        const storedCharacters = charactersString
            ? JSON.parse(charactersString)
            : [];
        const characterIndex = storedCharacters.findIndex(
            (character: Character) => character.id == id
        );
        if (characterIndex !== -1) {
            storedCharacters[characterIndex] = {
                ...storedCharacters[characterIndex],
                ...updatedCharacter,
            };
            localStorage.setItem(
                "characters",
                JSON.stringify(storedCharacters)
            );
            setLocalCharacters(storedCharacters);
        } else {
            console.error("Combattant non trouvé");
        }
    }

    return {
        deleteCharacter,
        findCharacterById,
        updateCharacter,
    };
}
