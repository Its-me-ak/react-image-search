import { useState } from "react";
import SearchIcon from '../search_icon.png'

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term)
    }

    const handleChange = (event) =>{
        setTerm(event.target.value);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Search for image" className="input" value={term} onChange={handleChange}/>
                <img src={SearchIcon} className="search-icon" onClick={handleFormSubmit} alt="" />
            </form>
        </>
    )
}

export default SearchBar;