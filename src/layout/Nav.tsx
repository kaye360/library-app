import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import Button from '../components/forms/Button'
import Logo from './Logo'

export default function Nav({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {

	return (
		<nav className={`flex items-center justify-between col-span-2 w-full p-4 relative z-20 max-w-7xl mx-auto ${variant === 'dark' ? 'text-primary-800' : 'text-primary-50'}`}>

			<Logo />

			<ul className="hidden md:flex items-center gap-4 text-lg font-medium">
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about'>About</Link></li>
				<li><Link to='/feed'>Feed</Link></li>
			</ul>

			<Button variant='text' className='md:hidden'>
				<Icon icon="menu" />
			</Button>

		</nav>
	)
}
