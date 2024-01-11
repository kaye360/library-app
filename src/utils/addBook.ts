import { GoogleBooksSearchResult } from "../types/GoogleBooks"



// Converts Authors Array to string.
// Sets max length of string to 30.
export function formatAuthors(authors : string[] | undefined) {
    if(!authors) return ''
    const authorsFormatted =  authors.join(', ')
    return authorsFormatted.length > 30 ? authorsFormatted.slice(0, 30) + '...' : authorsFormatted
}




// Converts Categories Array to string
export function formatCategories(categories : string[]) {
    return categories.join(', ')
}




// Resolve what to display after search form
type ResolveSearchState = 'default' | 'success' | 'empty' | 'error'  
type BookResultProp = GoogleBooksSearchResult | 'error' | null

export function resoloveSearchState(bookResults : BookResultProp) : ResolveSearchState {

    if( !bookResults) {

        return 'default'

    } else {

        if( bookResults && bookResults !== 'error' && bookResults.totalItems >= 1  ) return 'success'

        if( bookResults !== 'error' && bookResults.totalItems === 0 ) return 'empty'

        if( bookResults === 'error' ) return 'error'

    } 

    return 'default'

}