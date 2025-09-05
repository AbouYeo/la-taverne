import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AllCharactersAPI from "./pages/all-characters-api/AllCharactersAPI";
<<<<<<< HEAD
import AllCharacters from "./pages/all-characters/AllCharacters";
=======
>>>>>>> e3e3be7 (Combattants en local - beu)
import CreateCharacter from "./pages/create-character/CreateCharacter";
import Homepage from "./pages/homepage/Homepage";
import LocalCharacters from "./pages/local-characters/LocalCharacters";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Homepage />,
                },
                {
                    path: "tous-les-combattants-api",
                    element: <AllCharactersAPI />,
                },
                {
                    path: "/combattants-du-localstorage",
                    element: <LocalCharacters />,
                },
                {
<<<<<<< HEAD
                    path: "/tous-les-combattants",
                    element: <AllCharacters />,
                },
                {
=======
>>>>>>> e3e3be7 (Combattants en local - beu)
                    path: "/nouveau-character",
                    element: <CreateCharacter />,
                },
            ],
        },
    ]);

    return <RouterProvider router={routes} />;
}

export default App;
