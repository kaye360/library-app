import { useNavigate } from 'react-router-dom'
import Icon from '../components/Icon'
import Button from '../components/forms/Button'
import { useAuth } from '../hooks/useAuth'
import { signOut } from '../services/auth'
import SidebarLink from './SidebarLink'

export default function Sidebar() {

    const auth = useAuth()
    const navigate = useNavigate()

    async function signOutAndRedirect() {
        await signOut()
        navigate('/')
    }


    return (
        <div className="fixed bottom-0 w-full md:relative p-4 bg-primary-50 z-50">
            <nav className="relative z-50 md:sticky md:top-10 md:bottom-auto flex md:flex-col md:gap-12 md:justify-between">

                <ul className="relative flex items-center sm:items-end justify-evenly md:justify-start w-full md:grid gap-4 md:gap-8 text-xs sm:text-sm md:text-lg">
                    <SidebarLink to='/dashboard' icon='space_dashboard'>Dashboard</SidebarLink>
                    <SidebarLink to='/library' icon='book'>Library</SidebarLink>
                    <SidebarLink to='/wishlist' icon='list_alt'>Wishlist</SidebarLink>
                    <SidebarLink to='/addbook' icon='add_box' isActionButton>Add Book</SidebarLink>
                    <SidebarLink to='/notifications' icon='notifications'>Notifications</SidebarLink>
                    <SidebarLink to='/settings' icon='settings'>Settings</SidebarLink>
                </ul>

                <div>
                    <div className="flex items-center gap-2 font-semibold md:mb-4">
                        <img src={auth?.user?.user_metadata.avatar_url} className="rounded-full w-12 h-12"/>
                        <span className='hidden md:inline'>
                            { auth?.user?.email?.split('@')[0] }
                        </span>
                    </div>
                    <Button 
                        onClick={ signOutAndRedirect }
                        className='hidden md:flex w-full'
                    >
                        Sign Out
                        <Icon icon="logout" />
                    </Button>
                </div>      
            </nav>
        </div>
  )
}
