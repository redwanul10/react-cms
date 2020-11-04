
import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import Modal from 'react-responsive-modal';
import Gallery from '../gallery';
import InfiniteScroll from 'react-infinite-scroller';

const api_key = "5phtawvymxfs5r54xg5op8r5zqaws1xik1t87f68q75hljlw"

const Mce = (props) => {

    const [modal, setModal] = useState(false)
    const editorRef = useRef("")
    const editorRef2 = useRef("")

    const insertImg = (src) => {

        editorRef.current.insertContent(`<img src="${src}">`)
        setModal(false)
    }

    useEffect(() => {
        if (editorRef.current) editorRef.current.setContent(props.value)
        // window.EDITOR2 = editorRef.current
        // editorRef.current.get(props.name).setContent("<h1>hi emty value<h1>")
        // if (editorRef2.current.setContent) editorRef2.current.setContent("<h1>hi emty value<h1>")
    }, [props.submited, props.isNewValue])

    useEffect(() => {
        // if (editorRef.current) setTimeout(() => editorRef.current.setContent("<h1>hi emty value<h1>"), 1000)
    }, [editorRef.current])



    return (
        <>
            <Editor
                // value={props.value}
                initialValue={props.value}
                apiKey={api_key}
                id={props.name}
                init={{
                    height: 300,
                    menubar: true,
                    setup: (editor) => {
                        //editorRef = editor
                        window.EDITOR = editor
                        editorRef.current = editor
                        console.log(editor)

                        // setTimeout(() => editor.setContent("HELLO TINYMCE"), 5000)

                        editor.ui.registry.addButton('customInsertButton', {
                            text: 'HAHA',
                            onAction: function (_) {
                                editor.insertContent('&nbsp;<strong>It\'s my button!</strong>&nbsp;');
                            }
                        });

                        editor.ui.registry.addMenuButton('mybutton', {
                            text: 'My button',
                            fetch: function (callback) {
                                var items = [
                                    {
                                        type: 'menuitem',
                                        text: 'Menu item 1',
                                        onAction: function () {
                                            setModal(true)
                                        }
                                    },
                                    {
                                        type: 'nestedmenuitem',
                                        text: 'Menu item 2',
                                        icon: 'user',
                                        getSubmenuItems: function () {
                                            return [
                                                {
                                                    type: 'menuitem',
                                                    text: 'Sub menu item 1',
                                                    icon: 'unlock',
                                                    onAction: function () {
                                                        editor.insertContent('&nbsp;<em>You clicked Sub menu item 1!</em>');
                                                    }
                                                },
                                                {
                                                    type: 'menuitem',
                                                    text: 'Sub menu item 2',
                                                    icon: 'lock',
                                                    onAction: function () {
                                                        editor.insertContent('&nbsp;<em>You clicked Sub menu item 2!</em>');
                                                    }
                                                }
                                            ];
                                        }
                                    }
                                ];
                                callback(items);
                            }
                        })

                    },
                    plugins: [
                        'advlist autolink lists link image',
                        'charmap print preview anchor help',
                        'searchreplace visualblocks code',
                        'insertdatetime media table paste wordcount'
                    ],
                    toolbar:
                        'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | customInsertButton | help | mybutton'
                }}
                onChange={e => {
                    editorRef2.current = e.target
                    const content = e.target.getContent()
                    props.handleEditor(content, props.name)
                }}
            />

            {props.errorMsg && <strong style={{ color: "red" }}>{props.errorMsg}</strong>}

            <Modal open={modal} onClose={() => setModal(false)} center>

                <div style={{ height: "500px", overflow: "auto" }}>
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={props.fetchMoreImages}
                        hasMore={true}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                        useWindow={false}
                    >
                        <Gallery
                            insertImg={insertImg}
                            images={props.images}
                        />
                    </InfiniteScroll>
                </div>

            </Modal>

        </>
    )
}

const checkProps2 = (prev, next) => {

    if (prev.images.length !== next.images.length) {
        return false
    }

    if (next.isActive === true) {
        return true
    } else {
        return prev.value === next.value ? true : false
    }
}

// export default MyComponent;
// export default React.memo(Mce, checkProps2);

const ccc = (prev, next) => {
    // console.log(prev.value, next.value)
    // if (prev.restart !== next.restart) {
    //     return false
    // }

    if (prev.name !== next.name) {
        return false
    }

    // if (prev.name !== next.name) {
    //     return false
    // }updateFieldList={updateFieldList}

    if (prev.images.length !== next.images.length) {
        return false
    }


    if (prev.rerender !== next.rerender) {
        return false
    }

    if (prev.errorMsg !== next.errorMsg) {
        return false
    }

    return prev.value === next.value ? true : false
}
// export default React.memo(Mce, ccc)

export default Mce


