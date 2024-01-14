import Logo from './Logo'
import MainMenu from './MainMenu'
import UserMenu from './UserMenu'

export default function Nav({isTransparent = false} : {isTransparent? : boolean}) {

	return (
		<nav 
			className={`
				flex items-center justify-between col-span-2 w-full p-4 relative z-20 max-w-7xl mx-auto 
				${isTransparent ? '' : "bg-[url('/assets/hero-sky-books.png')] md:bg-cover bg-[center_top_-150px]"} 
				rounded-2xl text-primary-50
			`}
		>

			<Logo />

			<MainMenu />

			<UserMenu />

		</nav>
	)
}
