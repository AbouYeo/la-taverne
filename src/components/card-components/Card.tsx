import Button from "./Button";
import Statistiques from "./Statistiques";

type CardProps = {
    character: Character;
};

type Character = {
    image: string;
    name: string;
    health: number;
    magic: number;
    power: number;
};

export default function Card({ character }: CardProps) {
    const allStats = [
        { stat: "Santé", value: character.health, unity: "PV" },
        { stat: "Magie", value: character.magic, unity: "PM" },
        { stat: "Puissance", value: character.power, unity: "Atk" },
    ];

    console.table(character);
    return (
        <div className="ml-4 flex flex-col w-[250px] h-[400px] border border-neutral-500 overflow-hidden customShadow rounded-xl hover:scale-105 duration-300">
            <div className="w-[250px] h-[250px] overflow-hidden hover:">
                <img
                    src={`/src/assets/images/personnages/${character.image}`}
                    alt={`avatar ${character.name}`}
                    className="object-cover duration-300 hover:scale-105"
                />
            </div>
            <div className="p-2">
                <div>
                    <p className="font-bold text-xl text-center">
                        {character.name}
                    </p>

                    {allStats.map((oneStat) => (
                        <Statistiques
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
