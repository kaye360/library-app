import H1 from "../components/H1";
import MainLayout from "../layout/MainLayout";
import useLibrary from "../hooks/useLibrary";
import BookGrid from "../components/Library/BookGrid";

export default function Library() {

    // const library = useLibrary('library')
    const library = useLibrary('all')

    return (
        <MainLayout>
            <section>

                <H1>Library</H1>

                {/* <BookGrid library={library?.library} /> */}

                <div className="grid gap-4">

                    {library?.library.map( book => (
                        <div className="grid grid-cols-[100px_1fr] gap-6 p-6 bg-primary-100 bg-opacity-50 rounded-2xl">
                            
                            <div>
                                { book.thumbnail && <img src={book.thumbnail} /> }
                            </div>

                            <div>

                                <h2 className="text-xl font-semibold mb-4">
                                    {book.title} <br />
                                    <span className="text-lg font-medium">
                                        {book.subtitle}
                                    </span>
                                </h2>

                                <p>
                                    {book.author} <br/>
                                    {book.category} 
                                </p>
                            </div>
                        </div>
                    ))}

                </div>

            </section>

        </MainLayout>
    )
}
