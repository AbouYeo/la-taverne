import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AllCharacters from "./pages/all-characters/AllCharacters";
import ApiCharacters from "./pages/api-characters/ApiCharacters";
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
                    element: <ApiCharacters />,
                },
                {
                    path: "/combattants-du-localstorage",
                    element: <LocalCharacters />,
                },
                {
                    path: "/tous-les-combattants",
                    element: <AllCharacters />,
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
