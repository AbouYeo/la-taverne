import Card from "../../components/card-components/Card";
import type { Character } from "../../utilitis/Types";
import { useCharactersContext } from "../../utilitis/useCharactersContext";

export default function AllCharacters() {
    const { allCharacters } = useCharactersContext();

    return (
        <>
            <h1 className="flex justify-self-center font-black text-2xl py-3 mb-7">
                Tous les combattants
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 ">
                {allCharacters.map((oneCharacter: Character) => (
                    <Card key={oneCharacter.id} character={oneCharacter} />
                ))}
            </div>
        </>
    );
}
