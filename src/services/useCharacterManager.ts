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

    function deleteCharacter(id: string) {
        const characterData = findCharacterById(id);
        console.log("Suppression du Combattant avec l´id: ", id);
        console.log(characterData?.from);

        switch (characterData?.from) {
            case "manual":
                setManualCharacters(
                    manualCharacters.filter((character) => character.id !== id)
                );
                break;
            case "local":
                setLocalCharacters(
                    localCharacters.filter(
                        (character) => character.id != String(id)
                    )
                );
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

    return {
        deleteCharacter,
    };
}
