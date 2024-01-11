import { SyntheticEvent, useState } from "react";
import { GoogleBook } from "../../types/GoogleBooks";
import { formatAuthors } from "../../utils/addBook";
import Icon from "../Icon";
import Button from "../forms/Button";

export default function BookCard({book} :  {book : GoogleBook}) {

    const { imageLinks, title, authors,  } = book.volumeInfo

    const [isButtonsShown, setIsButtonsShown] = useState<boolean>(false)

    function show(view : 'mobile' | 'desktop') {
        if( view === 'desktop' && window.innerWidth > 768) setIsButtonsShown(true) 
        if( view === 'mobile'  && window.innerWidth <= 768 ) setIsButtonsShown(true) 
    }

    function hide(view : 'mobile' | 'desktop') {
        if( view === 'desktop' && window.innerWidth > 768) setIsButtonsShown(false) 
        if( view === 'mobile'  && window.innerWidth <= 768 ) setIsButtonsShown(false)     
    } 
    



    return (
        <div
            className='relative z-10 rounded-lg flex gap-4 h-min drop-shadow-md shadow-primary-400'
            onMouseEnter={ () => show('desktop') }
            onMouseLeave={ () => hide('desktop') }
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
                    onTouchEnd={ () => show('mobile') }
                >
                    <Icon icon="library_add" />
                    Add
                </Button>
            </div>

            {isButtonsShown && 
                <>
                    <button 
                        onTouchEnd={ () => hide('mobile') }
                        className="pr-2 pt-2 self-end absolute top-1 right-1 z-50 md:hidden"
                    >
                        <Icon icon="close" />
                    </button>

                    <div className="absolute inset-0 z-20 bg-primary-100/80 backdrop-blur-sm flex flex-col justify-center gap-2 items-center">


                        <button className="font-bold tracking-wide text-xl">
                            Library
                        </button>

                        <div className="h-[1px] w-4/5 bg-primary-400" />

                        <button className="font-bold tracking-wide text-xl">
                            Wishlist
                        </button>
                    </div>
                </>
            }

        </div>
    )
}
