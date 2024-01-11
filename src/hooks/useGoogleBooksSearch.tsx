import { useState, SyntheticEvent } from "react"
import { GoogleBooksSearchResult } from "../types/GoogleBooks"

export default function useGoogleBooksSearch() {
    
    const [bookResults, setBookResults] = useState<GoogleBooksSearchResult | null | 'error'>(null)
    const reset = () => setBookResults(null)


    async function search(e: SyntheticEvent) {
        e.preventDefault()

        if( ! (e.target instanceof HTMLFormElement) ) return

        const query: string = e.target.query.value
        const queryType: 'isbn' | 'title' | 'author' = e.target.queryType.value

        try {
            const res = await fetch(`${import.meta.env.VITE_GOOGLE_BOOKS_URL}?q=${queryType}:${query}&key=${import.meta.env.VITE_GOOGLE_BOOKS_KEY}&maxResults=40`)
            const data : GoogleBooksSearchResult = await res.json()
            setBookResults(data)

        } catch(e) {
            setBookResults('error')
        }


        // const bookData = data.items[0].volumeInfo

        // const book : Omit<Book, 'id'> = {
        //     userId: 'user123',
        //     title: bookData.title,
        //     subtitle: bookData.subtitle,
        //     author : formatAuthors(bookData.authors),
        //     description: bookData.description,
        //     category: formatCategories(bookData.categories),
        //     pages: bookData.pageCount,
        //     isRead: false,
        //     comments: [],
        //     thumbnail : bookData.imageLinks.thumbnail || bookData.imageLinks.smallThumbnail || null
        // }

    }

    return {
        bookResults,
        search,
        reset
    }

}
