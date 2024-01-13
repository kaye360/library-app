import { UseAddBookButtons } from '../../hooks/useAddBookButtons'
import { GoogleBook } from '../../types/GoogleBooks'
import Icon from '../Icon'



export default function AddBookButtons({book, addBookButtons} : {book: GoogleBook, addBookButtons : UseAddBookButtons}) {

    const { hideButtons, addBook, isAdded } = addBookButtons

    return (
        <>
            <button
                onTouchEnd={() => hideButtons('mobile')}
                className="pr-2 pt-2 self-end absolute top-1 right-1 z-50 md:hidden"
            >
                <Icon icon="close" />
            </button>

            <div className="absolute inset-0 z-20 bg-primary-100/80 backdrop-blur-sm flex flex-col justify-center gap-2 items-center">

                <button
                    onClick={ () => addBook.toLibrary(book) }
                    className="flex items-center gap-2 font-bold tracking-wide text-xl hover:text-orange-500"
                >
                    <Icon icon="add" />
                    Library
                </button>

                <div className="h-[1px] w-4/5 bg-primary-400" />

                <button 
                    onClick={ () => addBook.toWishlist(book) }
                    className="flex items-center gap-2 font-bold tracking-wide text-xl hover:text-orange-500"
                >
                    <Icon icon="add" />
                    Wishlist
                </button>

                { isAdded && (
                    <div className='bg-primary-100 fixed inset-0 z-50 grid place-items-center px-12'>
                        <div className='flex items-center gap-2'>
                            <Icon icon="task_alt" className=' text-emerald-500' />
                            <span className='font-semibold'>
                                {book.volumeInfo.title} was added to your {isAdded}
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
