import SidebarLink from './SidebarLink'

export default function Sidebar() {

    return (
        <div className="fixed bottom-0 w-full md:relative p-4 bg-primary-25 z-50">
            <nav className="relative z-50 md:sticky md:top-10 md:bottom-auto flex md:flex-col md:gap-12 md:justify-between">

                <ul className="relative flex items-center justify-evenly md:justify-start w-full md:grid gap-4 md:gap-8 text-xs sm:text-sm md:text-lg">
                    <SidebarLink to='/dashboard' icon='space_dashboard'>Dashboard</SidebarLink>
                    <SidebarLink to='/library' icon='book'>Library</SidebarLink>
                    <SidebarLink to='/addbook' icon='add_box' isActionButton>Add</SidebarLink>
                    <SidebarLink to='/wishlist' icon='list_alt'>Wishlist</SidebarLink>
                    <SidebarLink to='/notifications' icon='notifications'>Notifications</SidebarLink>
                </ul>  
            </nav>
        </div>
  )
}
