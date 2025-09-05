import Card from "../../components/card-components/Card";
import type { Character } from "../../utilitis/Types";
import { useCharactersContext } from "../../utilitis/useCharactersContext";

export default function Homepage() {
    const { manualCharacters } = useCharactersContext();

    //correction du lien des images
    const charactersWithImg = manualCharacters.map((character) => ({
        ...character,
        image: `${character.image}`,
    }));

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 ">
            {charactersWithImg.map((oneCharacter: Character) => (
                <Card key={oneCharacter.id} character={oneCharacter} />
            ))}
        </div>
    );
}
