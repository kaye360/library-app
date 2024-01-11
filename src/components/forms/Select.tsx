import { SelectHTMLAttributes } from "react";


interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className? : string
}

export default function Select({className = '', children, ...props} : SelectProps) {
    return (
        <select {...props} className={`border border-primary-300 p-2 rounded-2xl ${className}`}>
            {children}
        </select>
    )
}
