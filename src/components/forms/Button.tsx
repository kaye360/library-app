import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import generateButtonBaseClasses, { BaseButtonProps } from '../../utils/button'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, BaseButtonProps {
    className? : string,
    children? : any
}

export default function Button({
    variant = 'filled',
    color = 'primary',
    className = '',
    children,
    ...props
} : ButtonProps) {

    const baseClasses = generateButtonBaseClasses(variant)

    return (
        <button {...props} className={`${baseClasses} ${className}`}>
            {children}
        </button>
    )
}
