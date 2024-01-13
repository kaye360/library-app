import { Comment } from "./Comment";



export interface Book {
    id : string,
    userId: string,
    title : string,
    subtitle : string,
    author : string,
    description  : string,
    category : string,
    pages : number,
    isRead : boolean,
    comments : Comment[],
    thumbnail : string | null,
    isOwned : boolean,
    googleBookId : string
}