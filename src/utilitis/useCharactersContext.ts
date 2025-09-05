import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

export function useCharactersContext() {
    const context = useContext(CharactersContext);
    if (!context) {
        throw new Error(
            "useCharactersContext must be used inside CharactersContextProvider"
        );
    }
    return context;
}
