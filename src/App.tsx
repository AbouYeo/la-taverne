import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <main className="flex flex-col justify-between min-h-svh">
            <Navbar />
            <Card />
            <Footer />
        </main>
    );
}

export default App;
