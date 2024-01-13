import { Book } from '../../types/Book'

export default function BookGridItem({book} : {book : Book}) {
    return (
        <div
            key={book.id}
            className="w-full h-full bg-primary-100 grid items-center text-center"
        >
            {book.thumbnail ? (
                <img src={book.thumbnail} className="w-full h-full object-cover" />
            ) : (
                <div>
                    <span className="font-bold">
                        {book.title} <br />
                    </span>
                    {book.author}
                </div>
            )}
        </div>
    )
}
