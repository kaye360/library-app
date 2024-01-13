import H1 from "../components/H1";
import MainLayout from "../layout/MainLayout";
import useLibrary from "../hooks/useLibrary";
import BookGrid from "../components/Library/BookGrid";

export default function Library() {

    const library = useLibrary('library')

    return (
        <MainLayout>
            <section>

                <H1>Library</H1>

                <BookGrid library={library?.library} />

            </section>

        </MainLayout>
    )
}
