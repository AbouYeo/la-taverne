import type { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    color: string;
};
export default function Button({ children, color }: ButtonProps) {
    return (
        <button
            className={`${color} font-bold text-gray-100 hover:text-white rounded-xl border-2 border-neutral-400 hover:border-neutral-700 hover:opacity-90 duration-300 px-2 py-1`}
        >
            {children}
        </button>
    );
}
