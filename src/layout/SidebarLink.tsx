import { Link, useLocation } from "react-router-dom";
import Icon from "../components/Icon";

interface SidebarLinkProps {
    to: string, 
    icon: string, 
    children: any
    isActionButton? : boolean
}


export default function SidebarLink({
    to, icon, isActionButton = false, children
} : SidebarLinkProps ) {

    const location = useLocation()
    const isActive = location.pathname === to || location.pathname === `${to}/`

    return (
        <li className={isActionButton ? `
            fixed md:relative bottom-20 md:bottom-auto right-2 md:right-auto 
            w-16 h-16 md:w-auto md:h-auto grid place-content-center md:block
            bg-primary-700 md:bg-transparent 
            rounded-full border border-primary-100 md:border-none 
            text-primary-200 md:text-primary-900 
            shadow-xl md:shadow-none shadow-primary-300 
        ` : ''}>
            <Link 
                to={to} 
                className={`
                    relative flex items-center flex-col md:flex-row gap-1 ${isActive && !isActionButton ? 'text-secondary-600' : ''}
                    after:absolute after:bottom-0 after:left-0 after:h-3 after:bg-secondary-100 after:-z-10 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:ease-easeOutQuart
                `}
            >
                <Icon icon={icon} className={isActionButton ? 'scale-125 md:scale-100' : ''} />
                <span className={`hidden ${isActionButton ? 'md:inline' : 'xs:inline'}`}>
                    {children}
                </span>
            </Link>
        </li>
    )
}
