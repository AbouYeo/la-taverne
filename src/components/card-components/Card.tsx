<<<<<<< HEAD
import type { Character } from "../../assets/utilitis/Types";
=======
import type { Character } from "../../pages/utilitis/Types";
>>>>>>> e3e3be7 (Combattants en local - beu)
import Button from "./Button";
import Statistiques from "./Statistiques";

type CardProps = {
    character: Character;
};

export default function Card({ character }: CardProps) {
    const allStats = [
        { stat: "Santé", value: character.health, unity: "PV" },
        { stat: "Magie", value: character.magic, unity: "PM" },
        { stat: "Puissance", value: character.power, unity: "Atk" },
    ];

    return (
        <div
            className={`ml-4 flex flex-col w-[250px] h-[400px] border border-neutral-500 overflow-hidden rounded-xl hover:scale-105 duration-300 shadow-${character.side}`}
        >
            <div className="w-[250px] h-[250px] overflow-hidden hover:">
                <img
                    src={character.image}
                    alt={`avatar ${character.name}`}
                    className="object-cover duration-300 hover:scale-105"
                />
            </div>
            <div className="p-2">
                <div>
                    <div className="flex justify-between">
                        <p>{/*espace pour centrer le nom*/}</p>
                        <p className="font-bold text-xl text-center">
                            {character.name}
                        </p>
                        <p className="text-neutral-500 opacity-60 italic">
                            {" "}
                            {character.from}
                        </p>
                    </div>
<<<<<<< HEAD
                    {allStats.map((oneStat, index) => (
=======
                    {allStats.map((oneStat) => (
>>>>>>> e3e3be7 (Combattants en local - beu)
                        <Statistiques
                            key={index}
                            stat={oneStat.stat}
                            value={oneStat.value}
                            unit={oneStat.unity}
                        />
                    ))}
                </div>
                <div className="flex justify-between mt-2">
                    <Button color="bg-[#F194B4] hover:bg-red-600">
                        Attaquer
                    </Button>
                    <Button color="bg-blue-400">Defendre</Button>
                </div>
            </div>
        </div>
    );
}
