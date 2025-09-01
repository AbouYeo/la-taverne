import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <main className="flex flex-col justify-between min-h-svh">
            <Navbar />
            <section className="flex-grow py-4">
                <Outlet />
            </section>

            <Footer />
            <ToastContainer />
        </main>
    );
}
