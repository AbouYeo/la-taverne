import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <main className="flex flex-col justify-between min-h-svh">
            <Navbar />
            <section className="py-4">
                <Outlet />
            </section>

            <Footer />
        </main>
    );
}
