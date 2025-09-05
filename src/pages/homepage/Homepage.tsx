import Card from "../../components/card-components/Card";
import type { Character } from "../../utilitis/Types";
import { useCharactersContext } from "../../utilitis/useCharactersContext";

export default function Homepage() {
<<<<<<< HEAD
    const { manualCharacters } = useCharactersContext();
=======
    const twoCharacters = [
        {
            image: "heros.jpg",
            name: "Kikisan",
            health: 40,
            magic: 35,
            power: 60,
            side: "dark",
            from: "manual",
        },
        {
            image: "magicienne.jpg",
            name: "Karaba",
            health: 50,
            magic: 75,
            power: 40,
            side: "dark",
            from: "manual",
        },
    ];
>>>>>>> e3e3be7 (Combattants en local - beu)

    //lien vers le dossier des images en local
    const imgPath = "/src/assets/images/personnages/";

    //correction du lien des images
    const charactersWithImg = twoCharacters.map((character) => ({
        ...character,
        image: `${imgPath}${character.image}`,
    }));

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 ">
<<<<<<< HEAD
            {manualCharacters.map((oneCharacter: Character) => (
                <Card key={oneCharacter.id} character={oneCharacter} />
=======
            {charactersWithImg.map((oneCharacter, index) => (
                <Card key={index} character={oneCharacter} />
>>>>>>> e3e3be7 (Combattants en local - beu)
            ))}
        </div>
    );
}
