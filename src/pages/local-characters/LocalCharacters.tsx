<<<<<<< HEAD
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card-components/Card";
import { useCharactersContext } from "../../utilitis/useCharactersContext";

export default function LocalStorageCharacters() {
    const { localCharacters } = useCharactersContext();
    useEffect(() => {}, [localCharacters]);

    return (
        <>
=======
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card-components/Card";

export default function LocalStorageCharacters() {
    const [lsCharacters, setLsCharacters] = useState([]);

    const getCharacters = () => {
        const charactersString = localStorage.getItem("characters");
        const localStorageCharacters = charactersString
            ? JSON.parse(charactersString)
            : [];
        console.table(lsCharacters);
        setLsCharacters(localStorageCharacters);
    };

    useEffect(() => {
        getCharacters();
    }, []);

    return (
        <div className="min-h-1/2">
>>>>>>> e3e3be7 (Combattants en local - beu)
            <h1 className="flex justify-self-center font-black text-2xl py-3 mb-7">
                Tous les combattants en local
            </h1>
            <Link
                to="/nouveau-character"
                className="flex justify-self-center px-4 py-2 rounded-xl my-8 border-2 border-neutral-200 duration-300 hover:bg-neutral-300 w-fit"
            >
                Créer un nouveau combattant
            </Link>
            <div className="flex flex-wrap items-center justify-center gap-8 ">
<<<<<<< HEAD
                {localCharacters.map((oneCharacter) => (
                    <Card key={oneCharacter.id} character={oneCharacter} />
                ))}
            </div>
        </>
=======
                {lsCharacters.map((oneCharacter, index) => (
                    <Card key={index} character={oneCharacter} />
                ))}
            </div>
        </div>
>>>>>>> e3e3be7 (Combattants en local - beu)
    );
}
