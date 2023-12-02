import { useState } from "react";

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

            </form>
        </>
    )
}

export default SearchBar;