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
            grid place-items-center
            scale rounded-full w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-primary-100
            shadow-md md:shadow-none shadow-primary-300 
        ` : ''}>
            <Link 
                to={to} 
                className={`
                    relative flex items-center flex-col md:flex-row gap-1 
                    ${isActive && !isActionButton ? 'text-secondary-600' : ''}
                    after:absolute after:bottom-0 after:left-0 after:h-3 after:bg-secondary-150 after:-z-10 after:w-0 hover:after:w-full after:transition-all after:duration-200 after:ease-easeOutQuart
                `}
            >
                <Icon icon={icon} className={ isActionButton ? 'scale-125 translate-y-1' : ''} />
                <span className={`hidden xs:inline ${isActionButton ? 'text-lg' : ''}`}>
                    {children}
                </span>
            </Link>
        </li>
    )
}
