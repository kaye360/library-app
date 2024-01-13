import { PostgrestError } from "@supabase/supabase-js";
import { Book } from "../types/Book";
import { supabase } from "./auth";





export interface CreateBook {
    data: any[] | null,
    error: PostgrestError | null
}

export async function createBook(book: Omit<Book, 'id'>): Promise<CreateBook> {

    const { data, error } = await supabase
        .from('library')
        .insert([book])
        .select()

    return { data, error }
}





interface GetAllUsersBooks {
    library: Book[],
    error: PostgrestError | null
}

interface GetAllUsersBooksProps {
    userId: string, 
    filter : 'library' | 'wishlist' | 'all'
}

export async function getAllUserBooks({userId, filter} :  GetAllUsersBooksProps) : Promise<GetAllUsersBooks> {

    let library : Book[]
    let error : PostgrestError | null

    if( filter ===  'all') {

        let {data, error: sbError } = await supabase
            .from('library')
            .select('*')
            .eq('userId', userId)
        library = data as Book[]
        error = sbError

    } else {

        let {data, error: sbError } = await supabase
            .from('library')
            .select('*')
            .eq('userId', userId)
            .eq('isOwned', filter === 'library')

        library = data as Book[]
        error = sbError
    }

    return {library, error}
}