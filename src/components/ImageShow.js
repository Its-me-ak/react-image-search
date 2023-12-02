function ImageShow({ image }) {
    return (
            <div className="img-wrapper">
                <div className="img-show">
                    <img src={image.urls.small} alt={image.alt_description} />
                </div>
            </div>
    )
}

export default ImageShow;