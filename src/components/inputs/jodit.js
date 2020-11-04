import React, { useState, useRef, useEffect, useMemo } from 'react';
import JoditEditor from "jodit-react";
import Jodit from 'jodit'
import Modal from 'react-responsive-modal';
import Gallery from '../gallery';
import InfiniteScroll from 'react-infinite-scroller';
// import JoditEditor from "./customJoddit";
// import Modal from 'react-responsive-modal';

const Example = (props) => {
    window.ROOT = Jodit
    const editorRef = useRef(null)
    const cursor = useRef(null)
    const editorInstance = useRef('')
    const valueRef = useRef("")
    const [content, setContent] = useState('')
    const [update, toggleChange] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [modal, setModal] = useState(false)

    const insertImg = (src) => {
        window.EDITOR = editorRef.current

        // editorRef.current.selection.insertCursorAtPoint(640, 236)
        editorRef.current.selection.insertHTML("<h1>HELLO</h1>")
        // console.log(editorRef)
        // const image = document.createElement('img')
        // image.src = src
        // editorRef.current.selection.insertNode(image, true);
        // // editorRef.current.selection.insertHTML("<h1>HELLO</h1>")
        setModal(false)
        // editorRef.current.selection.focus()
        // editorRef.current.selection.insertCursorAtPoint(4, 1)
        // setTimeout(() => editorRef.current.selection.focus(), 1000)
        // setTimeout(function () {
        //     // console.log("focused")
        //     editorRef.current.selection.insertCursorAtPoint(701, 126)

        //     // const image = document.createElement('img')
        //     // const para = document.createElement('p')
        //     // image.src = src
        //     // editorRef.current.selection.insertNode(image);
        // editorRef.current.selection.setCursorAfter()
        console.log(editorRef.current.element)
        //     editorRef.current.selection.insertHTML("<h1>HELLO</h1>")
        //     // const node = document.getElementById(cursor.current[0].startId)
        //     // editorRef.current.selection.setCursorIn(node)
        //     // editorRef.current.selection.restore()setEditorValue
        //     // editorRef.current.selection.focus()
        //     // editorRef.current.selection.insertCursorAtPoint(4, 1)
        //     // const value = editorRef.current.getEditorValue()

        //     // editorRef.current.getEditorValue()
        // }, 2000);
    }

    const config = {
        showPlaceholder: false,
        toolbarSticky: true,
        uploader: {
            url: "/api/upload",
        },
        events: {
            afterInit(instance) {
                // console.log('jodit instance', instance);
                // window.EDITOR = instance
                // instance.constructor.plugins.add('insertText', function (editor) {
                //     editor.events.on('someEvent', function (text) {
                //         editor.s.insertHTMl('Hello ' + text);
                //     });
                // });
                // editorRef.current = instance
            },
        },
        ...props.options,
        extraButtons: [
            {
                name: 'our-button',
                iconURL: 'https://img.icons8.com/pastel-glyph/2x/search--v1.png',
                exec: function (editor) {
                    editorRef.current = editor

                    var dialog = new Jodit.modules.Dialog();
                    dialog.setTitle('Hello world');
                    dialog.setContent('<form onsubmit="alert(1);"><input type="text" /></form>');
                    dialog.open();
                    // const url = window.prompt()
                    // editor.selection.insertHTML()
                    // setModal(true)
                    // editor.events.fire('someEvent', 'world!!!');

                    // console.log("Button EditorInstance", editor)
                    // const image = document.createElement('img')
                    // const para = document.createElement('p')
                    // image.src = url
                    // editor.selection.insertNode(image);
                    // // editor.setEditorValue()
                    // // editor.selection.insertNode(para);
                    // // editor.selection.insertHTML("<br><img src='http://suneditor.com/docs/cat.jpg'/>");
                    // editor.selection.insertNode(image, true);
                    // editor.s.insertHTML("<h1>HELLO</h1>")
                }
            },
            ...props.options.extraButtons,
        ],
        // readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    useEffect(() => {
        // setContent("emty content")
    }, [props.rerender])

    useEffect(() => {
        // setTimeout(() => props.handleEditor(props.value ? props.value : "", props.name), 1000)
        // editorRef.current.setEditorValue("test")
        console.log("CALLING SUNEDITOR USEEFFECT METHOD")
    }, [props.submited, props.RichTextEditor])

    const MEMOEDITOR = useMemo(() => (
        <JoditEditor
            ref={editorRef}
            init={(getEditor) => console.log('this is from initFunction', getEditor)}
            value={props.value || ""}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => {
                props.handleEditor(newContent, props.name)
                valueRef.current = newContent
                // cursor.current = editorRef.current.selection.save()
                // console.log(editorRef.current.selection.save())
                window.EDITOR = editorRef.current
            }}
        />
    ), [props.value])
    return (
        <div >
            {/* {MEMOEDITOR} */}
            <JoditEditor
                ref={editorRef}
                init={(getEditor) => console.log('this is from initFunction', getEditor)}
                value={props.value || ""}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => {
                    props.handleEditor(newContent, props.name)
                    // valueRef.current = newContent
                    // cursor.current = editorRef.current.selection.save()
                    // console.log(editorRef.current.selection.save())
                    // window.EDITOR = editorRef.current
                }}
            />

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
        </div>
    );
}

const checkProps = (prev, next) => {
    console.log(prev.isActive, next.isActive)

    if (prev.index !== next.index) {
        alert("index changed")
        // console.log("JUST DO WHATEVER WHAT YOU WANT")
        // return false
    }


    if (next.RichTextEditor === true) {
        return true
    } else {

        if (next.isActive === true) {
            return true
        }

        if (prev.submited !== next.submited) {
            // console.log("JUST DO WHATEVER WHAT YOU WANT")
            return false
        }

        if (prev.submited !== next.submited && prev.value === "" && next.value === "") {
            // console.log("JUST DO WHATEVER WHAT YOU WANT")
            return false
        }

        // if (prev.value === "" && next.value === "") {
        //     // console.log("JUST DO WHATEVER WHAT YOU WANT")
        //     return true
        // }
        // if (!prev.value && !next.value) {
        //     // console.log("JUST DO WHATEVER WHAT YOU WANT")
        //     return true
        // }
        return prev.value === next.value ? true : false
    }


    // console.log(prev.value, next.value)
    // return prev.value === next.value ? true : false
}

const checkProps2 = (prev, next) => {
    // if (prev.RichTextEditor !== next.RichTextEditor && prev.value === next.value) {
    //     return true
    //     // console.log("JUST DO WHATEVER WHAT YOU WANT")
    //     // return false
    // }

    // if (prev.submited !== next.submited) {
    //     return false
    // }
    // if (prev.RichTextEditor !== next.RichTextEditor) {
    //     return true
    // }

    console.log(prev.updateFieldList, next.updateFieldList)

    // if (prev.updateFieldList !== next.updateFieldList) {
    //     console.log("updated value not same")
    //     return false
    // }

    // if (prev.name !== next.name) {
    //     return false
    // }

    return true

    if (prev.name !== next.name) {
        return true
    } else {
        if (prev.updateFieldList !== next.updateFieldList) {
            console.log("updated value not same")
            return false
        }



        if (prev.images.length !== next.images.length) {
            return false
        }

        if (next.isActive === true) {
            return true
        } else {
            return prev.value === next.value ? true : false
        }
    }


}

const ccc = (prev, next) => {
    // console.log(prev.value, next.value)
    // if (prev.restart !== next.restart) {
    //     return false
    // }

    if (prev.name !== next.name) {
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
export default React.memo(Example, ccc)