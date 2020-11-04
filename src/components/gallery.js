import React, { useEffect, useState, useRef } from 'react';


const Gallery = (props) => {

    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     fetch('https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo')
    //         .then(res => res.json())
    //         .then(data => setImages(data.result))
    // }, [])

    const inputRef = useRef()

    return (
        <div className="gallery">
            <div className="container">
                <input
                    onChange={e => props.handleUpload(e, e.target.files)}
                    ref={inputRef}
                    style={{ marginBottom: "30px" }}
                    type="file"
                    name="image"
                    id=""
                    multiple
                />
                <div className="row">
                    {props.images.map(image => (
                        <div className="col-md-3">
                            <img onClick={() => props.insertImg(image.src)} style={{ width: "100%" }} src={image.src} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;