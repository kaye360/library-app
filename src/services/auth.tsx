import { createClient } from "@supabase/supabase-js"




export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
)



export async function signIn() {
    await supabase.auth.signInWithOAuth({
        provider : 'google',
        options : {
            redirectTo : import.meta.env.DEV 
                ? 'http://localhost:5173/dashboard' 
                : 'https://josh-library-app.netlify.app/dashboard'
        }
    })
}



export async function signOut() {
    await supabase.auth.signOut()
}


