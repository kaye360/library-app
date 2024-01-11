import { FormEventHandler } from "react"
import Icon from "../Icon"
import Input from "../forms/Input"
import Select from "../forms/Select"
import Button from "../forms/Button"

interface SearchFormProps {
    search : FormEventHandler<HTMLFormElement>,
    reset : FormEventHandler<HTMLFormElement>
}

export default function SearchForm({search, reset} : SearchFormProps) {
    return (
    <>
        <h2 className="min-w-max font-semibold text-lg">
                Search Term:
        </h2>

        <form onSubmit={search} onReset={reset} className=''>

            <div className="flex items-center gap-4 flex-wrap md:flex-nowrap mb-8">

                <div className="w-full flex items-center gap-2">
                    <div className="w-full">
                        <label className='block w-full'>
                            <Input type='text' name="query" className="w-full" />
                        </label>
                    </div>

                    <Select name="queryType">
                        <option value="isbn" defaultChecked>ISBN</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                    </Select>

                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <Button
                        type="submit"
                        className='flex items-center justify-center gap-2 border border-primary-300 bg-primary-300 font-semibold px-8 py-3 rounded w-full md:w-fit'
                    >
                        <Icon icon="search" />
                    </Button>

                    <Button
                        type="reset"
                        variant="ghost"
                        className='flex items-center justify-center gap-2 border border-primary-300 font-semibold px-8 py-3 rounded w-full md:w-fit'
                    >
                        <Icon icon="restart_alt" />
                    </Button>
                </div>
            </div>
        </form>
    </>

    )
}
