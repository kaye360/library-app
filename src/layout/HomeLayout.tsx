import { useAuth } from "../hooks/useAuth";
import Nav from "./Nav";
import HeroImg from '../assets/hero-sky-books.png'
import ButtonLink from "../components/ButtonLink";

export default function MainLayout({children} : {children : any}) {

    const auth = useAuth()

    return (
        <div className={`mx-auto min-h-screen`}>


            <div className="relative h-screen">
                
                <Nav variant="light" />

                <img src={HeroImg} className="absolute inset-0 z-10 w-full h-full object-cover" />

                <div className="relative z-20 text-primary-900 text-center mt-[20vh] max-w-[60ch] mx-auto grid gap-4">
 
                    { auth?.user ? (
                        <div className="grid gap-8 bg-primary-100 p-12 rounded-2xl mx-3">
                            <div className="text-3xl font-medium">
                                Welcome back, {auth.user.email?.split('@')[0]}
                            </div>
                            <div className="">
                                <ButtonLink 
                                    to='/dashboard' 
                                    variant="ghost"
                                >
                                    Continue to Dashboard
                                </ButtonLink>
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className="text-5xl font-bold">
                                Organize your library
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique vero consequuntur fugiat ipsum ut, autem non accusantium recusandae facere.
                            </p>
                            <div>
                                <button>
                                    Sign Up/In
                                </button>
                                <button>
                                    Learn More
                                </button>
                            </div>
                        </>
                    )}
                </div>

            </div>
            
            <main className="p-4 h-full bg-primary-100">

                {children}

            </main>

        </div>
    )
}