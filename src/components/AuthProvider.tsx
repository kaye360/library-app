import { Session, User } from "@supabase/supabase-js"
import { useState, useEffect } from "react"
import { supabase } from "../services/auth"
import { authContext } from "../hooks/useAuth"




export function AuthProvider ({children} : {children : any}) {
    const auth = useAuthProvider()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}



function useAuthProvider() {

    const [session, setSession] = useState<Session | null>(null)
    const [user, setUser]       = useState<User | undefined>(undefined)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setUser(session?.user)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session)

            if(event === 'SIGNED_OUT') {
                setUser(undefined)
            }
        })

        return () => subscription.unsubscribe()
    }, [])

    
    return {
        session,
        user
    }

}