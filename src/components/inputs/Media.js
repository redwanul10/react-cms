import React, { useState, useEffect } from 'react';
import Modal from 'react-responsive-modal';
import MediaContent from '../MediaContent';
import ValidationStatus from '../ValidationStatus';


const Media = (props) => {

    const [modal, setModal] = useState(false)

    const insertImg = src => {
        props.onChange(src)
        setModal(false)
    }

    useEffect(() => {
        // console.log("RE_CREATING MEDIA COMPONENT")
        // setTimeout(() => props.onChange(""), 2000)
    }, [props.rerender])


    useEffect(() => {
        if (props.fetchImages && props.images.length === 0) props.fetchImages()
        if (props.fetchVideos && props.videos.length === 0) props.fetchVideos()
    }, [])


    return (
        <>
            <div onClick={e => setModal(true)} style={{ textAlign: "center", position: "relative" }}>
                <img style={{ width: "250px" }}
                    src={props.selected ? props.selected : "https://mist.ac.bd/images/default.jpg"}
                    alt=""
                />
                {props.selected && (
                    <span className="removeImageIcon" onClick={e => {
                        e.stopPropagation()
                        props.onChange("")
                    }}>
                        <i class="fa fa-times-circle" aria-hidden="true"></i>
                    </span>
                )}
            </div>

            <ValidationStatus
                error={props.errorMsg}
                disableMinMax
                {...props}
            />
            {/* {props.errorMsg && <strong style={{ color: "red" }}>{props.errorMsg}</strong>} */}


            <Modal open={modal} onClose={() => setModal(false)} center>
                <MediaContent
                    {...props}
                    handleImageClick={insertImg}
                    handleVideoClick={insertImg}
                />
            </Modal>
        </>
    );
}

// export default Media;

const checkProps = (prev, next) => {
    console.log(prev.rerender, next.rerender)

    if (prev.rerender !== next.rerender) {
        return false
    }
    if (prev.images.length !== next.images.length) {
        return false
    }

    if (prev.videos.length !== next.videos.length) {
        return false
    }

    if (prev.errorMsg !== next.errorMsg) {
        return false
    }

    return prev.selected === next.selected ? true : false
}

export default React.memo(Media, checkProps)