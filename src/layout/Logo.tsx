import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function Logo() {
    return (
        <Link 
            to="/"
            className='
                relative flex items-center gap-1 font-theme font-bold text-2xl min-w-max hover:scale-110 transition-all ease-easeOutQuart
            '
        >
            <Icon icon='book' />
            <span>Library App</span>
        </Link>
    )
}
