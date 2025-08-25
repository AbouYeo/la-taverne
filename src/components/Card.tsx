import Statistiques from "./Statistiques";

export default function Card() {
    return (
        <div className="ml-4 flex flex-col w-[250px] h-[400px] border border-neutral-500 overflow-hidden customShadow rounded-xl">
            <div className="w-[250px] h-[250px] overflow-hidden">
                <img src="/src/assets/images/personnages/heros.jpg" alt="" />
            </div>
            <div className="p-2">
                <div>
                    <p className="font-bold text-xl text-center">Kikisan</p>
                    <Statistiques stat="Santé" value={30} unit="PV" />
                    <Statistiques stat="Magie" value={30} unit="PM" />
                    <Statistiques stat="Puissance" value={30} unit="Atk" />
                </div>
                <div className="flex justify-between">
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
