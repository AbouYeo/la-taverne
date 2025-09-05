import Card from "../../components/card-components/Card";
import type { Character } from "../../utilitis/Types";
import { useCharactersContext } from "../../utilitis/useCharactersContext";

export default function Homepage() {
    const { manualCharacters } = useCharactersContext();

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 ">
            {manualCharacters.map((oneCharacter: Character) => (
                <Card key={oneCharacter.id} character={oneCharacter} />
            ))}
        </div>
    );
}
