import Button from "../../components/card-components/Button";
import Card from "../../components/card-components/Card";
import { addApiCharacters } from "../../context/ContextFunctions";
import { useCharactersContext } from "../../utilitis/useCharactersContext";

export default function AllCharactersAPI() {
    //Récupération des données depuis le context
    const { apiCharacters, setApiCharacters } = useCharactersContext();

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
            <div className="flex items-center justify-center my-7">
                <Button
                    color="bg-amber-700"
                    onClick={() => addApiCharacters(setApiCharacters)}
                >
                    Rappeler tous les combattants{" "}
                </Button>
            </div>
        </>
    );
}
