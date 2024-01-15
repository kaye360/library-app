import { Link, useLocation } from "react-router-dom";
import Icon from "../components/Icon";

interface SidebarLinkProps {
    to: string, 
    icon: string, 
    children: any
}


export default function SidebarLink({
    to, icon, children
} : SidebarLinkProps ) {

    const location = useLocation()
    const isActive = location.pathname === to || location.pathname === `${to}/`

    return (
        <li>
            <Link 
                to={to} 
                // ${ isActive ? 'text-secondary-600/100 ' : 'text-primary-900/70'}
                className={`
                    relative flex items-center flex-col md:flex-row gap-1  hover:text-primary-90/100  px-3 py-1 rounded-lg
                    ${isActive ? 'bg-primary-200/50' : 'text-primary-900/70'}
                `}
            >
                <Icon icon={icon} />
                <span className={`hidden xs:inline`}>
                    {children}
                </span>
            </Link>
        </li>
    )
}
