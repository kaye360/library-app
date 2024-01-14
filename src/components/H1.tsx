
export default function H1({children} : {children : any}) {
    return (
        <h1 
            className={`
                relative z-20 mb-4 pr-2 w-max text-4xl font-theme font-semibold
                after:absolute after:-z-10 after:bottom-1 *: after:left-0 after:w-full after:h-4 after:bg-secondary-100
            `}
        >
            {children}
        </h1>
    )
}
