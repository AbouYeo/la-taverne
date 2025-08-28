import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const allLinks = [
        {
            text: "Accueil",
            path: "/",
        },
        {
            text: "Combattants locaux",
            path: "/tous-les-combattants-local",
        },
        {
            text: "Combattants API",
            path: "/tous-les-combattants-api",
        },
        {
            text: "Créer",
            path: "/nouveau-character",
        },
    ];
    return (
        <nav className="flex items-center justify-between  border-b-neutral-500 p-4 customShadow">
            <Link className="hover:customShadow" to="/">
                La Taverne des Combattants
            </Link>
            <div className="flex justify-between gap-4">
                {allLinks.map((oneLink) => (
                    <NavLink
                        key={oneLink.text}
                        className={({ isActive }) =>
                            `text-xl hover:bg-neutral-200 px-2 py-1 rounded-md ${
                                isActive ? "underline" : ""
                            }`
                        }
                        to={oneLink.path}
                    >
                        {oneLink.text}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
}
