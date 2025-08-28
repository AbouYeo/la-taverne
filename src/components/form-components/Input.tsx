type InputProps = {
    label: string;
    type: string;
    state: string;
    setState: (value: string) => void;
};
export default function Input({ label, type, state, setState }: InputProps) {
    return (
        <>
            <label htmlFor={label.toLowerCase()} className="block">
                {label}:
            </label>
            <input
                type={type}
                id={label.toLowerCase()}
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="border rounded w-full bg-white px-2"
            />
        </>
    );
}
