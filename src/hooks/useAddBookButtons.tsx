import { useState } from "react"
import { GoogleBook } from "../types/GoogleBooks"
import { Book } from "../types/Book"
import { formatAuthors, formatCategories } from "../utils/addBook"
import { useAuth } from "./useAuth"
import { CreateBook, createBook } from "../services/book"



export interface AddBookActions {
    toLibrary(book : GoogleBook) : void,
    toWishlist(book : GoogleBook) : void,
    convertGoogleBookToBook (
        googleBook: GoogleBook, isOwned : boolean
    ) : Omit<Book, 'id'>
}

export interface UseAddBookButtons {
    isAdded : 'library' | 'wishlist' | false,
    clearIsAdded : Function,
    isButtonsShown : boolean, 
    showButtons : Function, 
    hideButtons : Function,
    addBook : AddBookActions
}

export default function useAddBookButtons() : UseAddBookButtons {

    const auth = useAuth()

    const [isAdded, setIsAdded] = useState<'library' | 'wishlist' | false>(false)
    function clearIsAdded() { setTimeout( () => setIsAdded(false), 5000) }

    const [isButtonsShown, setIsButtonsShown] = useState<boolean>(false)


    function showButtons(view : 'mobile' | 'desktop') {
        if( view === 'desktop' && window.innerWidth > 768) setIsButtonsShown(true) 
        if( view === 'mobile'  && window.innerWidth <= 768 ) setIsButtonsShown(true) 
    }


    function hideButtons(view : 'mobile' | 'desktop') {
        if( view === 'desktop' && window.innerWidth > 768) setIsButtonsShown(false) 
        if( view === 'mobile'  && window.innerWidth <= 768 ) setIsButtonsShown(false)     
    } 


    const addBook =  {

        convertGoogleBookToBook(googleBook: GoogleBook, isOwned : boolean) : Omit<Book, 'id'> {

            if(!auth?.user?.id) throw('No User ID specified')

            const { title, subtitle, authors, description, categories, pageCount, imageLinks } = googleBook.volumeInfo

            const book : Omit<Book, 'id'> = {
                userId: auth?.user?.id,
                title: title || '',
                subtitle: subtitle || '',
                author : formatAuthors(authors),
                description: description || '',
                category: formatCategories(categories || []),
                pages: pageCount || 0,
                isRead: false,
                comments: [],
                thumbnail : imageLinks?.thumbnail || imageLinks?.smallThumbnail || null,
                isOwned : isOwned,
                googleBookId : googleBook.id
            }

            return book
        },

        async toLibrary(googleBook : GoogleBook) : Promise<CreateBook> {

            const book = this.convertGoogleBookToBook(googleBook, true)
            const createLibraryBook = await createBook(book)
            setIsAdded('library')
            clearIsAdded()
            return createLibraryBook
        },
        
        async toWishlist(googleBook : GoogleBook) : Promise<CreateBook> {

            const book = this.convertGoogleBookToBook(googleBook, false)
            const createWishlistBook = await createBook(book)
            setIsAdded('wishlist')
            clearIsAdded()
            return createWishlistBook
        }

    }


    return {
        isAdded, clearIsAdded, isButtonsShown, showButtons, hideButtons, addBook
    }
}
