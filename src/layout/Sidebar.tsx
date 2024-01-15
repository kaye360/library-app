import SidebarLink from './SidebarLink'

export default function Sidebar() {

    return (
        <div className="fixed bottom-0 w-full md:relative py-2 bg-primary-25/75 backdrop-blur-md  z-50">
            <nav className="relative z-50 md:sticky md:top-10 md:bottom-auto flex md:flex-col md:gap-12 md:justify-between md:pt-4">

                <ul className="relative flex items-center justify-evenly md:justify-start w-full md:grid gap-4 md:gap-6 text-xs sm:text-sm md:text-lg">
                    <SidebarLink to='/dashboard' icon='space_dashboard'>Dashboard</SidebarLink>
                    <SidebarLink to='/library' icon='book'>Library</SidebarLink>
                    <SidebarLink to='/wishlist' icon='list_alt'>Wishlist</SidebarLink>
                    <SidebarLink to='/addbook' icon='add_box'>Add</SidebarLink>
                    <SidebarLink to='/notifications' icon='notifications'>Notifications</SidebarLink>
                </ul>  
            </nav>
        </div>
  )
}
