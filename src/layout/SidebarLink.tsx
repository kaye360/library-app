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
        <li className={isActionButton ? ' fixed md:relative bottom-20 md:bottom-auto right-2 md:right-auto bg-primary-700 md:bg-transparent rounded-full md:border-none px-2 py-3 md:p-0 text-primary-200 md:text-primary-900 shadow-xl md:shadow-none shadow-primary-300 border border-primary-100' : ''}>
            <Link to={to} className={`flex items-center flex-col md:flex-row gap-1 hover:translate-x-1 px-2 py-1  ${isActive ? ' border border-primary-300 rounded-2xl min-w-max' : ''}`}>
                <Icon icon={icon} className={isActionButton ? 'scale-125 md:scale-100' : ''} />
                <span className={`hidden ${isActionButton ? 'md:inline' : 'xs:inline'}`}>
                    {children}
                </span>
            </Link>
        </li>
    )
}
