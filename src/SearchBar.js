import { useState } from "react/cjs/react.development"
import { useContext } from "react"
import { SearchContext } from "./context/SearchContext"

export default function SearchBar() {

    const {term, handleSearch} = useContext(SearchContext)

    return (
        <div>
            <form>
                <input ref={term} type="text" placeholder="Search"/>
                <button onClick={e => handleSearch(e, term.current.value)}>Submit</button>
            </form>
        </div>
    )
}