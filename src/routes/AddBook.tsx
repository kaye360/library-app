import MainLayout from '../layout/MainLayout'
import DefaultAddBookMessage from '../components/AddBook/DefaultAddBookMessage'
import SearchResults from '../components/AddBook/SearchResults'
import NoResultsMessage from '../components/AddBook/NoResultsMessage'
import SearchForm from '../components/AddBook/SearchForm'
import useGoogleBooksSearch from '../hooks/useGoogleBooksSearch'
import SearchErrorMessage from '../components/AddBook/SearchErrorMessage'
import { resoloveSearchState } from '../utils/addBook'
import H1 from '../components/H1'


// const isbn: string = '0735211299'
// const isbn: string = '9781608464708'


export default function AddBook() {

   const { bookResults, search, reset } = useGoogleBooksSearch()

   const searchState = resoloveSearchState(bookResults)

    return (
        <MainLayout>

            <section>

                <H1>Add A Book</H1>

                <SearchForm search={search} reset={reset} />

            </section>

            <section className=' from-slate-100 to-slate-600'>

                { searchState === 'default' &&
                    <DefaultAddBookMessage /> 
                }

                { searchState === 'success' &&
                    <SearchResults bookResults={bookResults} /> 
                }

                { searchState === 'empty' &&
                    <NoResultsMessage />
                }

                { searchState === 'error' &&
                    <SearchErrorMessage />
                }

            </section>

        </MainLayout>
    )
}
