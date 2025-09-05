import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
<<<<<<< HEAD
import CharactersContextProvider from "./context/CharactersContext.tsx";
=======
>>>>>>> e3e3be7 (Combattants en local - beu)
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CharactersContextProvider>
            <App />
        </CharactersContextProvider>
    </StrictMode>
);
