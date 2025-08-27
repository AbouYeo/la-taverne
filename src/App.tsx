import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import AllCharactersAPI from "./pages/all-characters-api/AllCharactersAPI";
import AllCharactersLocal from "./pages/all-characters/AllCharactersLocal";
import Homepage from "./pages/homepage/Homepage";

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
                    path: "tous-les-combattants-local",
                    element: <AllCharactersLocal />,
                },
                {
                    path: "tous-les-combattants-api",
                    element: <AllCharactersAPI />,
                },
            ],
        },
    ]);

    return <RouterProvider router={routes} />;
}

export default App;
