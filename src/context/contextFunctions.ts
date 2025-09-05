import { nanoid } from "nanoid";
import type { Character } from "../utilitis/Types";
//lien vers le dossier des images en local
const imgPath = "/src/assets/images/personnages/";
const url = "https://la-taverne.ducompagnon.fr/api/personnages";

function addManualCharacters(
    setManualCharacters: React.Dispatch<React.SetStateAction<Character[]>>
) {
    const characters: Character[] = [
        {
            id: nanoid(6),
            image: "heros.jpg",
            name: "Kikisan",
            health: 40,
            magic: 35,
            power: 60,
            side: "angel",
            from: "manual",
        },
        {
            id: nanoid(6),
            image: "magicienne.jpg",
            name: "Karaba",
            health: 50,
            magic: 75,
            power: 40,
            side: "dark",
            from: "manual",
        },
    ];

    //correction du lien des images
    const charactersWithImg = characters.map((character) => ({
        ...character,
        image: `${imgPath}${character.image}`,
    }));

    setManualCharacters(charactersWithImg);
}

async function addApiCharacters(
    setApiCharacters: React.Dispatch<React.SetStateAction<Character[]>>
) {
    type ApiCharacter = {
        id: number;
        name: string;
        image: string;
        health: number;
        magic: number;
        power: number;
        side_id: number;
        author: string;
        side_name: string;
        from: string;
    };

    try {
        const response = await fetch(url);
        const data = await response.json();

        //correction du lien des images
        const charactersWithImg = data.map((character: ApiCharacter) => ({
            ...character,
            image: `${imgPath}${character.image}`,
            from: "api",
            side: character.side_name,
        }));
        setApiCharacters(charactersWithImg);

        if (!response.ok) {
            throw new Error(`Problème de connexion à l´API ${response.status}`);
        }
    } catch (error) {
        console.error("Erreur lors de la récuperation des données ", error);
    }
}

function addLocalCharacters(
    setLocalCharacters: React.Dispatch<React.SetStateAction<Character[]>>
) {
    const charactersString = localStorage.getItem("characters");
    const localStorageCharacters = charactersString
        ? JSON.parse(charactersString)
        : [];
    setLocalCharacters(localStorageCharacters);
}

export { addApiCharacters, addLocalCharacters, addManualCharacters };
