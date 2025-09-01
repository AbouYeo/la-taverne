import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const allLinks = [
        {
            text: "Accueil",
            path: "/",
        },

        {
            text: "Combattants API",
            path: "/tous-les-combattants-api",
        },
        {
            text: "Combattants locaux",
            path: "/combattants-du-localstorage",
        },
    ];
    return (
        <nav className="flex items-center justify-between  border-b-neutral-500 p-4 customShadow">
            <Link className="hover:customShadow" to="/">
                La Taverne des Combattants
            </Link>
            <div className="flex justify-between gap-4 flex-wrap">
                {allLinks.map((oneLink) => (
                    <NavLink
                        key={oneLink.text}
                        className={({ isActive }) =>
                            `max-sm:text-xs md:text-xl  hover:bg-neutral-200 px-2 py-1 rounded-md ${
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
