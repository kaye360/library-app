import { InputHTMLAttributes } from "react";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className? : string
}

export default function Input({className = '', ...props} : InputProps) {
    return (
        <input {...props} className={`border border-primary-300 p-2 rounded-2xl ${className}`} />
    )
}
