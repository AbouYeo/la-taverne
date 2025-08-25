import { useState } from "react";

type StatProps = {
    stat: string;
    value: number;
    unit: string;
};
export default function Statistiques({ stat, value, unit }: StatProps) {
    const [statValue, setStatValue] = useState(value);

    return (
        <div className="flex justify-between">
            <p>{stat}:</p>{" "}
            <div className="flex w-[110px] justify-between ">
                <button onClick={() => setStatValue(statValue - 5)}>🔽</button>{" "}
                {statValue} {unit}
                <button onClick={() => setStatValue(statValue + 5)}>🔼</button>
            </div>
        </div>
    );
}
