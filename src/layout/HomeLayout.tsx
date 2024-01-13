import { useAuth } from "../hooks/useAuth";
import Nav from "./Nav";
import HeroImg from '../assets/hero-sky-books.png'
import ButtonLink from "../components/ButtonLink";
import Button from "../components/forms/Button";
import { signIn } from "../services/auth";

export default function HomeLayout({children} : {children : any}) {

    const auth = useAuth()
    const scrollDown = () => window.scrollTo({top : 500, behavior: "smooth"})
    

    return (
        <div className={`mx-auto min-h-screen`}>


            <div className="relative h-screen">
                
                <Nav variant="light" />

                <img src={HeroImg} className="absolute inset-0 z-10 w-full h-full object-cover" />

                <div className="relative z-20 text-primary-900 text-center mt-[20vh] max-w-[60ch] mx-auto grid gap-4">
 
                    { auth?.user ? (
                        <HeroContent>
                            <div className="text-3xl font-theme font-bold">
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
                        </HeroContent>
                    ) : (
                        <HeroContent>
                            <h1 className="text-5xl font-bold font-theme">
                                Keep your library organized
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam similique vero consequuntur. 
                            </p>
                            <div className="flex items-center justify-center gap-2">
                                <Button
                                    onClick={signIn}
                                    variant="filled"
                                >
                                    Sign Up/In
                                </Button>
                                <Button
                                    onClick={scrollDown}
                                    variant="ghost"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </HeroContent>
                    )}
                </div>

            </div>
            
            <main className="p-4 h-full bg-primary-100">

                {children}

            </main>

        </div>
    )
}



function HeroContent({children} : {children : any}) {

    return (
        <div className="grid gap-6 bg-primary-100 p-8 rounded-2xl mx-3">
            {children}
        </div>
    )
}