import ImageShow from './ImageShow'

function ImageList({images}) {

    const renderdImage = images.map((image, i)=>{
        return <ImageShow image={image} key={i}/>
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