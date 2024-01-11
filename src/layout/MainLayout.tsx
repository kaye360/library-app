import { useAuth } from "../hooks/useAuth";
import Nav from "./Nav";
import Sidebar from "./Sidebar";


export default function MainLayout({children} : {children : any}) {

    const auth = useAuth()

    return (
        <div className={`
            grid grid-rows-[auto_1fr] max-w-7xl mx-auto min-h-screen gap-x-4
            ${auth?.user ? 'grid-cols-1 md:grid-cols-[200px_1fr]' : 'grid-cols-1'} 
        `}>

        <Nav />

            { auth?.user && <Sidebar /> }

            <main className="p-4 h-full">

                {children}

            </main>

        </div>
    )
}