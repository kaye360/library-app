import { PostgrestError } from '@supabase/supabase-js';
import { useEffect, useState } from 'react'
import { getAllUserBooks } from '../services/book';
import { Book } from '../types/Book';
import { useAuth } from './useAuth';



export default function useLibrary(filter : 'library' | 'wishlist' | 'all') {

    const auth = useAuth()

    const [library, setLibrary] = useState<
        {
            library: Book[];
            error: PostgrestError | null;
        } | null
    >(null)

    
    useEffect( () => {
        ( async function getLibrary() {
            if(! auth?.user?.id) return
            const library = await getAllUserBooks({userId : auth?.user?.id, filter})
            library.library.reverse()
            setLibrary(library)
        })()
    }, [])

    return library
}
