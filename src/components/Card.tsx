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
        <div className="ml-4 flex flex-col w-[250px] h-[400px] border border-neutral-500 overflow-hidden customShadow rounded-xl">
            <div className="w-[250px] h-[250px] overflow-hidden">
                <img
                    src={`/src/assets/images/personnages/${character.image}`}
                    alt=""
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
                    <button className="bg-blue-500 rounded-xl border-2 border-neutral-400 hover:border-neutral-700 hover:opacity-90 duration-300 px-2 py-1">
                        Attaquer
                    </button>
                    <button className="bg-orange-500 rounded-xl border-2 border-neutral-400 hover:border-neutral-700 hover:opacity-90 duration-300 px-2 py-1">
                        Defendre
                    </button>
                </div>
            </div>
        </div>
    );
}
