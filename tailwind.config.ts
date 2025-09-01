import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // 🎨 Couleurs personnalisées
                brand: {
                    light: "#3ABEF9",
                    DEFAULT: "#008CFF",
                    dark: "#0059B2",
                },
                danger: "#FF4C4C",
                success: "#22C55E",
            },
            spacing: {
                // 📏 Espacements custom (padding/margin)
                128: "32rem", // tu pourras écrire className="p-128"
                144: "36rem",
            },
            fontFamily: {
                // ✍️ Polices personnalisées
                title: ["Poppins", "sans-serif"],
                body: ["Inter", "sans-serif"],
            },
            boxShadow: {
                // 🌑 Ombres custom
                soft: "2px 2px 6px rgba(0,0,0,0.1)",
                strong: "6px 6px 20px rgba(0,0,0,0.25)",
                custom: "box-shadow: 0 0 10px 0 rgba(0, 0, 0.8)",
            },
            borderRadius: {
                // 🔲 Bords arrondis custom
                xl2: "1.25rem",
            },
            rotate: {
                // 🔄 Rotations custom
                2: "2deg",
                15: "15deg",
            },
            keyframes: {
                // 🎬 Animations custom
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
                // ⏯️ Utilisation de l’animation
                wiggle: "wiggle 0.5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};

export default config;
