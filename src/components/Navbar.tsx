import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="  border-b-neutral-500 p-4 customShadow">
            <Link to="/">La Taverne des Combattans</Link>
        </nav>
    );
}
