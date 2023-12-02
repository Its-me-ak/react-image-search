import ImageShow from './ImageShow'

function ImageList({images}) {

    const renderdImage = images.map((image)=>{
        return <ImageShow image={image}/>
    });

    return (
        <>
            <div className='container'>
               {renderdImage}
            </div>
        </>
    )
}

export default ImageList;