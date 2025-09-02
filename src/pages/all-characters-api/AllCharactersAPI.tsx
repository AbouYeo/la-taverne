import { useEffect, useState } from "react";
import Card from "../../components/card-components/Card";

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

export default function AllCharactersAPI() {
    const [characters, setCharacters] = useState([]);
    //lien vers le dossier des images en local
    const imgPath = "/src/assets/images/personnages/";

    const url = "https://la-taverne.ducompagnon.fr/api/personnages";
    const fetchCharacters = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.table(data);
            //correction du lien des images
            const charactersWithImg = data.map((character: ApiCharacter) => ({
                ...character,
                image: `${imgPath}${character.image}`,
                from: "api",
                side: character.side_name,
            }));
            setCharacters(charactersWithImg);

            if (!response.ok) {
                throw new Error(
                    `Problème de connexion à l´API ${response.status}`
                );
            }
        } catch (error) {
            console.error("Erreur lors de la récuperation des données ", error);
        }
    };
    useEffect(() => {
        fetchCharacters();
    }, []);

    return (
        <>
            <h1 className="flex justify-self-center font-black text-2xl py-3 mb-7">
                Tous les combattants de l´API
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 ">
                {characters.map((oneCharacter, index) => (
                    <Card key={index} character={oneCharacter} />
                ))}
            </div>
        </>
    );
}
