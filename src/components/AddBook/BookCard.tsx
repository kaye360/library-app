import useAddBookButtons from "../../hooks/useAddBookButtons";
import { GoogleBook } from "../../types/GoogleBooks";
import { formatAuthors } from "../../utils/addBook";
import Icon from "../Icon";
import Button from "../forms/Button";
import AddBookButtons from "./AddBookButtons";

export default function BookCard({book} :  {book : GoogleBook}) {


    const { imageLinks, title, authors,  } = book.volumeInfo

    
    const addBookButtons = useAddBookButtons()
    const { showButtons, hideButtons, isButtonsShown } = addBookButtons


    return (
        <div
            className='relative z-10 rounded-lg flex gap-4 h-min drop-shadow-md shadow-primary-400'
            onMouseEnter={ () => showButtons('desktop') }
            onMouseLeave={ () => hideButtons('desktop') }
        >
            <img src={imageLinks?.thumbnail || imageLinks?.smallThumbnail} className='w-[75px] h-[110px] object-cover' />

            <div className='flex flex-col justify-between items-start w-full'>
                <div>
                    <h3 className='text-md font-bold leading-5'>{title}</h3>
                    <p>{formatAuthors(authors)}</p>
                </div>

                <Button 
                    variant="ghost" 
                    className="text-primary-300 border-primary-100 text-sm py-[4px] px-[10px] md:hidden"
                    onTouchEnd={ () => showButtons('mobile') }
                >
                    <Icon icon="library_add" />
                    Add
                </Button>
            </div>

            { isButtonsShown && <AddBookButtons addBookButtons={addBookButtons} book={book} /> }

        </div>
    )
}




