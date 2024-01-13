import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function Logo() {
    return (
        <Link 
            to="/"
            className='
                relative flex items-center gap-1 font-theme font-bold text-2xl select-none min-w-max 
                after:absolute after:bottom-0 after:left-0 after:h-4 after:bg-secondary-100 after:-z-10 after:w-0 hover:after:w-full after:transition-all after:duration-500 after:ease-easeOutBack
            '
        >
            <Icon icon='book' />
            <span>Library App</span>
        </Link>
    )
}
