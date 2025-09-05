import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import CharactersContextProvider from "./context/CharactersContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CharactersContextProvider>
            <App />
        </CharactersContextProvider>
    </StrictMode>
);
