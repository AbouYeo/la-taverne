import Card from "../../components/card-components/Card";

export default function Homepage() {
    const twoCharacters = [
        {
            image: "heros.jpg",
            name: "Kikisan",
            health: 40,
            magic: 35,
            power: 60,
            side: "angel",
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

    //lien vers le dossier des images en local
    const imgPath = "/src/assets/images/personnages/";

    //correction du lien des images
    const charactersWithImg = twoCharacters.map((character) => ({
        ...character,
        image: `${imgPath}${character.image}`,
    }));

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 ">
            {charactersWithImg.map((oneCharacter, index) => (
                <Card key={index} character={oneCharacter} />
            ))}
        </div>
    );
}
