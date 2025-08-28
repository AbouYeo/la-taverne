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
        const response = await fetch(url);
        const data = await response.json();
        setClasses(data);
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
