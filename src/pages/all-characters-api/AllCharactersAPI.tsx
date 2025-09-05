import Card from "../../components/card-components/Card";
<<<<<<< HEAD
import { useCharactersContext } from "../../utilitis/useCharactersContext";

export default function AllCharactersAPI() {
    //Récupération des données depuis le context
    const { apiCharacters } = useCharactersContext();
=======
import type { Character } from "../utilitis/Types";

export default function AllCharactersAPI() {
    const [characters, setCharacters] = useState([]);
    //lien vers le dossier des images en local
    const imgPath = "/src/assets/images/personnages/";

    const url = "https://la-taverne.ducompagnon.fr/api/personnages";
    const fetchCharacters = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            //correction du lien des images
            const charactersWithImg = data.map((character: Character) => ({
                ...character,
                image: `${imgPath}${character.image}`,
                from: "api",
            }));
            setCharacters(charactersWithImg);

            if (!response.ok) {
                throw new Error(
                    `Problème de connexion à l´API ${response.status}`
                );
            }
        } catch (error) {
            console.error("Erreur lors de la récuperation des données ", error);
        }
    };
    useEffect(() => {
        fetchCharacters();
    }, []);
>>>>>>> e3e3be7 (Combattants en local - beu)

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
