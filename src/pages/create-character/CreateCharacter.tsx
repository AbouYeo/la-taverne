import { useState } from "react";
import { toast } from "react-toastify";
import ImageInput from "../../components/form-components/ImageInput";
import Input from "../../components/form-components/Input";
import SideInput from "../../components/form-components/SideInput copy";

export default function NewCharacter() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [health, setHealth] = useState("");
    const [magic, setMagic] = useState("");
    const [power, setPower] = useState("");
    const [side, setSide] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name.length < 3) {
            toast.error("Nom trop court!");
            return;
        }
        if (Number(health) < 0) {
            toast.error("La santé ne peut pas être negative!");
        }
        if (Number(power) < 0) {
            toast.error("La puissance ne peut pas être negative!");
        }

        const newCharacter = {
            name,
            image,
            health: parseInt(health),
            magic: parseInt(magic),
            power: parseInt(power),
            side,
            from: "local",
        };
        toast.success("Combattant créé avec succès!");

        setName("");
        setImage("");
        setHealth("");
        setMagic("");
        setPower("");
        setSide("");

        const charactersString = localStorage.getItem("characters");
        const oldCharacters = charactersString
            ? JSON.parse(charactersString)
            : [];
        oldCharacters.push(newCharacter);
        localStorage.setItem("characters", JSON.stringify(oldCharacters));

        console.table(newCharacter);
    };

    return (
        <div className=" border border-neutral-100 rounded-xl bg-blue-50 shadow shadow-blue-200 hover:bg-blue-100 md:w-9/12 md:justify-self-center px-4 py-2">
            <h1 className="flex justify-self-center font-black text-2xl py-3 mb-7">
                Création d´un nouveau combattant
            </h1>
            <form
                onSubmit={(e) => handleSubmit(e)}
                className="flex flex-col rounded border border-neutral-500 p-3"
            >
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <Input
                        label="Nom"
                        type="text"
                        state={name}
                        setState={setName}
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <ImageInput
                        label="Avatar"
                        image={image}
                        setImage={setImage}
                    />
                </div>

                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <Input
                        label="Santé"
                        type="number"
                        state={health}
                        setState={setHealth}
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <Input
                        label="Magie"
                        type="number"
                        state={magic}
                        setState={setMagic}
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <Input
                        label="Puissance"
                        type="number"
                        state={power}
                        setState={setPower}
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <SideInput
                        label="Coté de la force"
                        side={side}
                        setSide={setSide}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-300 w-fit py-1.5 px-3 rounded font-bold self-center"
                >
                    Créer le personnage
                </button>
            </form>
        </div>
    );
}
