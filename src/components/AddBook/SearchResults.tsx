import { GoogleBooksSearchResult } from '../../types/GoogleBooks'
import BookCard from './BookCard'



export default function SearchResults({bookResults} : {bookResults : GoogleBooksSearchResult | 'error' | null}) {

    if( !bookResults || bookResults === 'error' ) return <></>

    return (
        <>
            <h2 className='text-2xl font-semibold mb-8'>Search Results</h2>

            <div className='grid grid-cols-3d grid-cols-[repeat(auto-fit,minmax(275px,1fr))] gap-12'>
                {bookResults?.items.map( (book, i) => <BookCard book={book} key={i} />  )}
            </div>
        </>
    )
}
