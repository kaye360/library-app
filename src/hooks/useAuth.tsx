import { Session, User } from "@supabase/supabase-js";
import { createContext, useContext } from "react";



type AuthContext = { 
    session: Session | null; 
    user: User | undefined; 
}


export const authContext = createContext<AuthContext | null>(null);



export function useAuth() {
    return useContext(authContext)
}
