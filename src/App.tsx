import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    const allCharacters = [
        {
            image: "heros.jpg",
            name: "Kikisan",
            health: 40,
            magic: 35,
            power: 60,
        },
        {
            image: "magicienne.jpg",
            name: "Karaba",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "orc.jpg",
            name: "Orc",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "elfe.jpg",
            name: "Shanra",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "chevalier.jpg",
            name: "Mazabé",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "dragon.jpg",
            name: "Dracula",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "sorcier.jpg",
            name: "Merlin",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "magicien_glace.jpg",
            name: "Snowmann",
            health: 50,
            magic: 75,
            power: 40,
        },
        {
            image: "sorciere_feu.jpg",
            name: "Tasuma",
            health: 50,
            magic: 75,
            power: 40,
        },
    ];

    return (
        <main className="flex flex-col justify-between min-h-svh">
            <Navbar />
            <section className="flex justify-center items-center gap-8 flex-wrap">
                {allCharacters.map((oneCharacter, index) => (
                    <Card key={index} character={oneCharacter} />
                ))}
            </section>
            <Footer />
        </main>
    );
}

export default App;
