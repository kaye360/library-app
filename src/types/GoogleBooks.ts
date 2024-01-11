


export interface GoogleBooksSearchResult {
    items : GoogleBook[],
    kind : string,
    totalItems : number
}



export interface GoogleBook {
    volumeInfo : {
        authors? : string[],
        categories? : string[],
        description? : string,
        imageLinks : {
            smallThumbnail? : string,
            thumbnail? : string
        },
        pageCount? : number,
        subtitle? : string,
        title? : string,
    },
    id : string
}
