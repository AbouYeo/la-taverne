import Card from "../../components/card-components/Card";

export default function Homepage() {
    const twoCharacters = [
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
    ];

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 ">
            {twoCharacters.map((oneCharacter, index) => (
                <Card key={index} character={oneCharacter} />
            ))}
        </div>
    );
}
