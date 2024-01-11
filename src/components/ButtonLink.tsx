import { HTMLAttributes } from 'react'
import generateButtonBaseClasses, { BaseButtonProps } from '../utils/button'
import { Link } from 'react-router-dom'

interface ButtonProps extends HTMLAttributes<HTMLAnchorElement>, BaseButtonProps {
    to : string,
    className? : string,
    children? : any
}

export default function ButtonLink({
    to,
    variant = 'filled',
    color = 'primary',
    className = '',
    children,
    ...props
} : ButtonProps) {

    const baseClasses = generateButtonBaseClasses(variant)

    return (
        <Link to={to} {...props} className={`${baseClasses} ${className}`}>
            {children}
        </Link>
    )
}
