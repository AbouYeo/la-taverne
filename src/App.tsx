import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AllCharactersAPI from "./pages/all-characters-api/AllCharactersAPI";
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
                    path: "/nouveau-character",
                    element: <CreateCharacter />,
                },
            ],
        },
    ]);

    return <RouterProvider router={routes} />;
}

export default App;
