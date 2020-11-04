import React, { useState } from 'react';
import Gallery from './gallery';
import InfiniteScroll from 'react-infinite-scroller';


const MediaContent = (props) => {

    const [activeTab, setActiveTab] = useState("Image")

    const handleTab = (e, tab) => {
        e.preventDefault()
        setActiveTab(tab)
    }

    return (
        <>
            <ul className="modal_menu">
                <li><a href="" className={`${activeTab === "Image" ? "active" : ""}`} onClick={e => handleTab(e, "Image")}>Image {props.images.length}</a></li>
                {/* <li><a href="" className={`${activeTab === "Gif" ? "active" : ""}`} onClick={e => handleTab(e, "Gif")}>Gif</a></li> */}
                <li><a href="" className={`${activeTab === "Video" ? "active" : ""}`} onClick={e => handleTab(e, "Video")}>Video {props.videos.length}</a></li>
            </ul>

            <div style={{ height: "500px", overflow: "auto" }}>
                {activeTab === "Image" && (
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={props.fetchMoreImages}
                        hasMore={true}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        useWindow={false}
                    >
                        <Gallery
                            handleUpload={props.handleUpload}
                            insertImg={props.handleImageClick}
                            images={props.images}
                        />
                    </InfiniteScroll>)
                }

                {activeTab === "Video" && (
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={props.fetchMoreVideos}
                        hasMore={true}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        useWindow={false}
                    >
                        <Gallery
                            handleUpload={props.handleUpload}
                            insertImg={props.handleVideoClick}
                            images={props.videos}
                        />
                    </InfiniteScroll>
                )}
            </div>
        </>
    );
}

export default MediaContent;