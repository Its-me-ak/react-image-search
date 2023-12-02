import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';
import './App.css'

function App(){

    const [images, setImages] = useState([])

    const handleSubmit = async (term)=>{
       let result = await searchImages(term);
        setImages(result)
    }
    return (
        <>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images = {images}/>
        </>
    )
}

export default App;