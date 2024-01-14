import { useEffect, useState } from "react"
import Avatar from "../components/Avatar"
import Icon from "../components/Icon"
import Button from "../components/forms/Button"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { signOut } from "../services/auth"

export default function UserMenu() {



    const { toggleUserNav, isUserNavOpen, navigateToSettings, signOutAndRedirect, userHandle } = useUserMenu()


    return (
        <div className='relative' data-usermenu>

            <Button
                onClick={toggleUserNav}
                variant="text"
                className="flex items-center gap-2 font-medium"
            >
                <Avatar />

                <span className='hidden md:inline text-primary-50'>
                    {userHandle}
                </span>
            </Button>

            <div
                className={` ${isUserNavOpen ? 'grid gap-2' : 'hidden'} absolute top-[80%] right-0 py-2`}
            >

                <Button
                    onClick={navigateToSettings}
                    variant="ghost"
                >
                    <Icon icon="settings" />
                    Settings
                </Button>

                <Button
                    onClick={signOutAndRedirect}
                    variant="ghost"
                >
                    <Icon icon="logout" />
                    Sign Out
                </Button>
            </div>
        </div>
    )
}



function useUserMenu() {

    const [isUserNavOpen, setIsUserNavOpen] = useState<boolean>(false)

    const toggleUserNav = () => setIsUserNavOpen(prev => !prev)
    const closeUserNav = () => setIsUserNavOpen(false)

    const auth = useAuth()

    const userHandle = auth?.user?.email?.split('@')[0]

    const navigate = useNavigate()

    async function signOutAndRedirect() {
        setIsUserNavOpen(false)
        await signOut()
        navigate('/')
    }

    function navigateToSettings() {
        setIsUserNavOpen(false)
        navigate('/settings')
    }

    useEffect( () => {

        function resolveIfUserMenuClicked(e : MouseEvent) {
            let el = e.target
            let isUserMenuClicked = false

            for( let i = 1; i <= 5; i++ ) {
                if( el instanceof HTMLElement && el.dataset.usermenu) isUserMenuClicked = true
                if( el instanceof HTMLElement ) el = el.parentElement
            }
    
            if (!isUserMenuClicked) closeUserNav()

            isUserMenuClicked = false
        }

        window.addEventListener('click', resolveIfUserMenuClicked)
    
        return () => {
            window.removeEventListener('click', resolveIfUserMenuClicked)
        }

    }, [])

    return {
        toggleUserNav,
        closeUserNav,
        isUserNavOpen,
        signOutAndRedirect,
        navigateToSettings,
        userHandle
    }
}
