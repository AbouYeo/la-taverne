import { useState } from "react";
import ImageInput from "./ImageInput";
import SideInput from "./SideInput copy";

export default function NewCharacter() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [health, setHealth] = useState("");
    const [magic, setMagic] = useState("");
    const [power, setPower] = useState("");
    const [side, setSide] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCharacter = {
            name,
            image,
            health: parseInt(health),
            magic: parseInt(magic),
            power: parseInt(power),
            side,
        };

        setName("");
        setHealth("");
        setMagic("");
        setPower("");
        setSide("");

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
                    <label htmlFor="name" className="block">
                        {" "}
                        Nom:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded w-full bg-white px-2"
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
                    <label htmlFor="health" className="block">
                        {" "}
                        Santé:
                    </label>
                    <input
                        type="number"
                        id="health"
                        value={health}
                        onChange={(e) => setHealth(e.target.value)}
                        className="border rounded w-full bg-white px-2"
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <label htmlFor="magic" className="block">
                        {" "}
                        Magie:
                    </label>
                    <input
                        type="number"
                        id="magic"
                        value={magic}
                        onChange={(e) => setMagic(e.target.value)}
                        className="border rounded w-full bg-white px-2"
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <label htmlFor="power" className="block">
                        {" "}
                        Puissance:
                    </label>
                    <input
                        type="number"
                        id="power"
                        value={power}
                        onChange={(e) => setPower(e.target.value)}
                        className="border rounded w-full bg-white px-2"
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
