import Card from "../../components/card-components/Card";
import { useCharactersContext } from "../../utilitis/useCharactersContext";

export default function AllCharactersAPI() {
    //Récupération des données depuis le context
    const { apiCharacters } = useCharactersContext();
    return (
        <>
            <h1 className="flex justify-self-center font-black text-2xl py-3 mb-7">
                Tous les combattants de l´API
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-8 ">
                {apiCharacters.map((oneCharacter) => (
                    <Card key={oneCharacter.id} character={oneCharacter} />
                ))}
            </div>
        </>
    );
}
