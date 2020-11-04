import React, { useState, useRef, useEffect, useMemo } from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import Modal from 'react-responsive-modal';
import Gallery from '../gallery';
import InfiniteScroll from 'react-infinite-scroller';
import MediaContent from '../MediaContent';
import CustomSunEditor from './customEditor'
import ValidationStatus from '../ValidationStatus';



const customBtn = `
<button type="button" class="se-btn _se_command_save se-resizing-enabled se-tooltip" data-display="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.74 15.74"><g><path d="M18.53,19.5l.2-.05A1.78,1.78,0,0,0,20.13,18l0-.09V7.14a2,2,0,0,0-.28-.64A3.18,3.18,0,0,0,19.43,6c-.5-.52-1-1-1.55-1.54A2.59,2.59,0,0,0,17.37,4a1.83,1.83,0,0,0-.61-.25H6l-.21,0a1.78,1.78,0,0,0-1.4,1.49l0,.1V17.87a2.49,2.49,0,0,0,.09.37,1.79,1.79,0,0,0,1.44,1.23l.09,0Zm-6.25-.6H6.92a.61.61,0,0,1-.68-.48.78.78,0,0,1,0-.22V12.3a.62.62,0,0,1,.69-.68H17.64a.62.62,0,0,1,.69.69V18.2a.64.64,0,0,1-.71.69H12.28ZM12,9.81H8.15a.63.63,0,0,1-.72-.71v-4a.64.64,0,0,1,.72-.72h7.66a.64.64,0,0,1,.72.72v4a.65.65,0,0,1-.74.72ZM13.5,5V9.18h1.78V5Z" transform="translate(-4.41 -3.76)"></path></g></svg>
        <span class="se-tooltip-inner"><span class="se-tooltip-text">Select From Media</span></span>
</button>
`
export const options = {
    width: "100%",
    height: "200",
    videoFileInput: true,
    plugins,
    placeholder: 'Start typing something...',
    templates: [
        {
            name: 'Template-1',
            html: '<p>HTML source1</p>'
        },
        {
            name: 'Template-2',
            html: '<p>HTML source2</p>'
        }
    ],
    imageGalleryUrl: 'https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo',
    buttonList: [
        ['undo', 'redo',
            'font', 'fontSize', 'formatBlock',
            'paragraphStyle', 'blockquote',
            'bold', 'underline', 'italic',
            'fontColor', 'hiliteColor', 'textStyle',


            'align', 'horizontalRule', 'list', 'lineHeight',
            'table', 'link', 'image', 'video', 'audio', /** 'math', */ // You must add the 'katex' library at options to use the 'math' plugin.
            /** 'imageGallery', */ // You must add the "imageGalleryUrl".

            'fullScreen',
            // 'showBlocks', 'codeView','strike', 'subscript', 'superscript',
            // 'preview', 'print', 'save', 'template','outdent', 'indent','removeFormat','imageGallery',
            {
                name: 'REDWAN',
                // dataCommand: 'REDWAN',
                buttonClass: 'Redwan',
                title: 'Redwan',
                dataDisplay: 'dialog',
                innerHTML: '<svg viewBox="0 0 24 24"><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" /></svg>'
            }
        ]
    ]
}

const MyComponent = props => {

    const [modal, setModal] = useState(false)
    const editor = useRef(null)

    const handleChange = (content) => {
        const editorValue = content === "<p><br></p>" ? "" : content
        props.handleEditor(editorValue, props.name)
        // const data = editor.current.editor.getContents(true);
    }

    const insertImg = (src) => {

        editor.current.editor.insertHTML(`<img src="${src}">`, true, true)
        setModal(false)
    }

    useEffect(() => {

        console.log("re Creating")

        editor.current.editor.setOptions(options);

        window[props.name] = editor.current

        setTimeout(() => {
            document.querySelector(`.richTextEditor${props.name} .Redwan`).addEventListener('click', (e) => {
                e.stopPropagation()
                setModal(true)
            }, 1000)
        })

        // props.handleEditor(props.value ? props.value : "", props.name)
        // if (props.value) editor.current.editor.setContents(props.value)
    }, [])



    useEffect(() => {

        props.rerender && editor.current.editor.setContents("")

    }, [props.rerender])



    return (
        <>
            <div className={`richTextEditor${props.name}`}>
                {/* {editorMemo} */}
                {/* <CustomSunEditor
                    setContents={props.value}
                    ref={editor}
                    onChange={handleChange}
                    enableToolbar={true}
                    showToolbar={true}
                    id={props.name}
                /> */}
                <SunEditor
                    setContents={props.value}
                    ref={editor}
                    onChange={handleChange}
                    enableToolbar={true}
                    showToolbar={true}
                    id={props.name}
                />

                {/* {props.errorMsg && <strong style={{ color: "red" }}>{props.errorMsg}</strong>} */}
                <ValidationStatus
                    error={props.errorMsg}
                    charLen={props.value.length}
                    {...props}
                />

                <Modal open={modal} onClose={() => setModal(false)} center>

                    <MediaContent
                        {...props}
                        handleImageClick={insertImg}
                        handleVideoClick={insertImg}
                    />

                </Modal>
            </div>
        </>
    );
};




const checkProps2 = (prev, next) => {

    console.log(prev.updateFieldList, next.updateFieldList)

    // if (prev.restart !== next.restart) {
    //     return false
    // }

    // if (prev.RichTextEditor !== next.RichTextEditor) {
    //     console.log("NOT SAME VALUE")
    //     return false
    // }updateFieldList

    // if (prev.updateFieldList !== next.updateFieldList) {
    //     return false
    // }



    if (prev.name !== next.name) {
        return true
    }

    if (prev.updateFieldList !== next.updateFieldList) {
        console.log("updated value not same")
        return false
    }

    if (prev.errorMsg !== next.errorMsg) {
        return false
    }

    if (prev.images.length !== next.images.length) {
        return false
    }

    if (prev.videos.length !== next.videos.length) {
        return false
    }

    if (next.isActive === true) {
        return true
    } else {
        return prev.value === next.value ? true : false
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

// export default MyComponent;
export default React.memo(MyComponent, ccc);

