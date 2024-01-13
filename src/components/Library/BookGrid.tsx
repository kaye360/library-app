import { Book } from "../../types/Book";
import BookGridItem from "./BookGridItem";

export default function BookGrid({library} : {library : Book[] | undefined}) {

    if(!library) return <></>

    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))]">
            { library.map( book => <BookGridItem book={book} key={book.id} /> )}
        </div>
    )
}
