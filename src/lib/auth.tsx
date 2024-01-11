import { createClient } from "@supabase/supabase-js"




export const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
)



export async function signIn() {
    await supabase.auth.signInWithOAuth({provider : 'google'})
}



export async function signOut() {
    await supabase.auth.signOut()
}


