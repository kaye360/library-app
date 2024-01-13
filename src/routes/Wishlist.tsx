import H1 from "../components/H1";
import MainLayout from "../layout/MainLayout";
import useLibrary from "../hooks/useLibrary";
import BookGrid from "../components/Library/BookGrid";

export default function Wishlist() {

    const wishlist = useLibrary('wishlist')

    return (
        <MainLayout>
            <section>

                <H1>Wishlist</H1>

                <BookGrid library={wishlist?.library} />

            </section>

        </MainLayout>
    )
}
