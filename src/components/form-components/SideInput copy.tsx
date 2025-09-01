import { useEffect, useState } from "react";

type SideProps = {
    label: string;
    side: string;
    setSide: (value: string) => void;
};

export default function SideInput({ label, side, setSide }: SideProps) {
    type Classe = {
        id: number;
        side: string;
    };

    const [classes, setClasses] = useState<Classe[]>([]);

    const url = "https://la-taverne.ducompagnon.fr/api/classes";
    const fetchClasses = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(
                    `Probleme de connexion à l´API ${response.status}`
                );
            }
            setClasses(data);
        } catch (error) {
            console.error(
                `Erreur lors de la récuperation des données ${error}`
            );
        }
    };
    useEffect(() => {
        fetchClasses();
    }, []);

    return (
        <>
            <label htmlFor="side" className="block">
                {label}:{" "}
            </label>
            <select
                name="side"
                title="side"
                value={side}
                onChange={(e) => setSide(e.target.value)}
                className="bg-white px-2 rounded border w-full"
            >
                <option disabled value="">
                    Selectionner un coté de la force 🔽
                </option>

                {classes.map((classe) => (
                    <option key={classe.id} value={classe.side}>
                        {classe.side}
                    </option>
                ))}
            </select>
        </>
    );
}
