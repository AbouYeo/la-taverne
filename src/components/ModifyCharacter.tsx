import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCharacterManager } from "../services/useCharacterManager";
import type { Character } from "../utilitis/Types";
import ImageInput from "./form-components/ImageInput";
import Input from "./form-components/Input";
import SideInput from "./form-components/SideInput copy";

export default function ModifyCharacter() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { findCharacterById, updateCharacter } = useCharacterManager();

    const [character, setCharacter] = useState<Character>({
        id: "",
        name: "",
        image: "",
        health: 0,
        power: 0,
        magic: 0,
        side: "",
        from: "",
    });

    type FormInputEvent = {
        target: {
            name: string;
            value: string;
        };
    };
    const handleChange = (e: FormInputEvent) => {
        const { name, value } = e.target;
        setCharacter((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        if (!id) return;
        const characterFound = findCharacterById(id);
        if (!characterFound) {
            toast.error("Combattant non trouvé");
            navigate("/");
        } else {
            setCharacter(characterFound?.character);
        }
    }, [id]);
    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!id) return;
        updateCharacter(id, character);
        toast.success("Combattant modifiée avec succès");
        navigate("/combattants-du-localstorage");
    };

    return (
        <div className=" border border-neutral-100 rounded-xl bg-blue-50 shadow shadow-blue-200 hover:bg-blue-100 md:w-9/12 md:justify-self-center px-4 py-2">
            <h1 className="flex justify-self-center font-black text-2xl py-3 mb-7">
                Modifier un combattant
            </h1>
            <form
                onSubmit={(e) => handleSave(e)}
                className="flex flex-col rounded border border-neutral-500 p-3"
            >
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <Input
                        label="Nom"
                        type="text"
                        state={character.name}
                        setState={(value) => {
                            handleChange({ target: { name: "name", value } });
                        }}
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <ImageInput
                        label="Avatar"
                        image={character.image}
                        setImage={(value) => {
                            handleChange({ target: { name: "image", value } });
                        }}
                    />
                </div>

                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <Input
                        label="Santé"
                        type="number"
                        state={String(character.health)}
                        setState={(value) => {
                            handleChange({ target: { name: "health", value } });
                        }}
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <Input
                        label="Magie"
                        type="number"
                        state={String(character.magic)}
                        setState={(value) => {
                            handleChange({ target: { name: "magic", value } });
                        }}
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <Input
                        label="Puissance"
                        type="number"
                        state={String(character.power)}
                        setState={(value) => {
                            handleChange({ target: { name: "power", value } });
                        }}
                    />
                </div>
                <div className="border border-neutral-300 rounded p-3 mb-2 w-full">
                    <SideInput
                        label="Coté de la force"
                        side={character.side}
                        setSide={(value) => {
                            handleChange({ target: { name: "side", value } });
                        }}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-300 w-fit py-1.5 px-3 rounded font-bold self-center"
                >
                    Enregistrer
                </button>
            </form>
        </div>
    );
}
