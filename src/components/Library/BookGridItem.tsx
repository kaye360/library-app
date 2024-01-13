import { Book } from '../../types/Book'

export default function BookGridItem({book} : {book : Book}) {
    return (
        <button
            key={book.id}
            className="w-full h-full bg-primary-200 grid items-center text-center hover:[&>*]:scale-110 overflow-hidden"
        >
            {book.thumbnail ? (
                <img 
                    src={book.thumbnail} 
                    className="w-full h-full object-cover  transition-all ease-easeOutQuart" 
                />
            ) : (
                <div>
                    <span className="font-bold">
                        {book.title} <br />
                    </span>
                    {book.author}
                </div>
            )}
        </button>
    )
}
