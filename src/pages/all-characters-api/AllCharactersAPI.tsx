import { useEffect, useState } from "react";
import Card from "../../components/card-components/Card";

export default function AllCharactersAPI() {
    const [characters, setCharacters] = useState([]);

    const url = "https://la-taverne.ducompagnon.fr/api/personnages";
    const fetchCharacters = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data);
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
