

type ButtonVariant = 'filled' | 'ghost' | 'text'

export interface BaseButtonProps {
    variant? : ButtonVariant
}



export default function generateButtonBaseClasses(variant : ButtonVariant) {

    let classes = 'flex items-center justify-center gap-1 px-6 py-2 border rounded-2xl font-bold tracking-wide text-lg  text-primary-900 hover:scale-105 transition-all duration-100'

    const shadowClass = ' shadow-primary-200 shadow-md hover:shadow-xl'

    if (variant === 'filled') {
        classes += ' bg-primary-300  border-primary-50 hover:bg-primary-400 fil' + shadowClass
    }

    if (variant === 'ghost') {
        classes += ' border-primary-300 hover:bg-primary-300' + shadowClass
    }

    if(variant === 'text') {
        classes += ' border-transparent hover:underline'
    }

    return classes

}