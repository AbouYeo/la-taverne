import Card from "../../components/card-components/Card";

export default function AllCharactersLocal() {
    const allCharacters = [
        {
            image: "heros.jpg",
            name: "Kikisan",
            health: 40,
            magic: 35,
            power: 60,
        },
        {
            image: "magicienne.jpg",
            name: "Karaba",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "orc.jpg",
            name: "Orc",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "elfe.jpg",
            name: "Shanra",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "chevalier.jpg",
            name: "Mazabé",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "dragon.jpg",
            name: "Dracula",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "sorcier.jpg",
            name: "Merlin",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "magicien_glace.jpg",
            name: "Snowmann",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "sorciere_feu.jpg",
            name: "Tasuma",
            health: 50,
            magic: 75,
            power: 40,
        },
    ];

    return (
        <>
            <h1 className="flex justify-self-center font-black text-2xl py-3 mb-7">
                Tous les combattants en local
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 ">
                {allCharacters.map((oneCharacter, index) => (
                    <Card key={index} character={oneCharacter} />
                ))}
            </div>
        </>
    );
}
