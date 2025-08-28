import { useEffect, useState } from "react";

type ImageInputProps = {
    label: string;
    image: string;
    setImage: (value: string) => void;
};

export default function ImageInput({
    label,
    image,
    setImage,
}: ImageInputProps) {
    type Image = {
        name: string;
        url: string;
    };
    const [images, setImages] = useState<Image[]>([]);

    const urlAPI = "https://la-taverne.ducompagnon.fr/api/images";

    const fetchImages = async () => {
        const response = await fetch(urlAPI);
        const data = await response.json();
        setImages(data);
    };
    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <>
            <label htmlFor="images" className="block">
                {label}:{" "}
            </label>
            <select
                name="images"
                title="images"
                value={image}
                onChange={(e) => {
                    setImage(e.target.value);
                }}
                className="bg-white px-2 rounded border w-full"
            >
                <option disabled value="">
                    Selectionner un avatar
                </option>

                {images.map((img) => (
                    <option key={img.name} value={img.url}>
                        {img.name}
                    </option>
                ))}
            </select>
        </>
    );
}
