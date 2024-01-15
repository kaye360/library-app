import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function MainMenu() {

    

    return (
        <div className='ml-auto md:ml-0'>
            <ul className="hidden md:flex items-center gap-8 text-lg font-medium bg-primary-900/30 px-6 py-3 rounded-2xl backdrop-blur-md">
                <li><Link to='/' className="inline-block hover:underline hover:scale-105">Home</Link></li>
                <li><Link to='/about' className="inline-block hover:underline hover:scale-105">About</Link></li>
                <li><Link to='/feed' className="inline-block hover:underline hover:scale-105">Feed</Link></li>
            </ul>

            <button className='md:hidden grid place-items-center scale-150 text-primary-100'>
                <Icon icon="menu" />
            </button>
        </div>
    )
}
