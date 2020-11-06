import React, { useEffect, useRef, useState } from "react";
import suneditor from "suneditor";
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'
import Modal from 'react-responsive-modal';
import MediaContent from '../MediaContent';
import ValidationStatus from "../ValidationStatus";
// import React, { Component, createRef } from "react";

const CustomSun = (props) => {

    // let editor = null;
    const element = useRef()
    const editor = useRef()
    const [submited, setSubmited] = useState(false)
    const [isNew, setIsNew] = useState(false)
    const [modal, setModal] = useState(false)


    useEffect(() => {

        editor.current = suneditor.create(element.current, {
            plugins: plugins,
            width: "100%",
            buttonList: [
                ['undo', 'redo',
                    'font', 'fontSize', 'formatBlock',
                    'paragraphStyle', 'blockquote',
                    'bold', 'underline', 'italic',
                    'fontColor', 'hiliteColor', 'textStyle',
                    'align', 'horizontalRule', 'list', 'lineHeight',
                    'table', 'link', 'image', 'video', 'audio', /** 'math', */ // You must add the 'katex' library at options to use the 'math' plugin.
                    'fullScreen',
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
        });

        editor.current.setContents("hello")
        editor.current.onChange = (contents, core) => { if (props.onChange) props.onChange(contents) }

        window[props.name] = editor.current

        setTimeout(() => {
            const elem = document.querySelector(`.richTextEditor${props.name} .Redwan`)
            if (!elem) return
            elem.addEventListener('click', (e) => {
                e.stopPropagation()
                setModal(true)
            }, 1000)
        })

        return () => {
            if (editor.current) editor.current.destroy();
        }

    }, [])

    useEffect(() => {
        if (!editor.current) return

        if (submited !== props.submited || isNew !== props.isNewValue) {
            editor.current.setContents(props.value)
            setSubmited(props.submited)
            setIsNew(props.isNewValue)
        }

    }, [props.value])

    const insertImg = (src) => {

        editor.current.insertHTML(`<img src="${src}">`, true, true)
        setModal(false)
    }

    return (
        <div className={`richTextEditor${props.name}`}>
            <textarea ref={element} name={props.name} cols="30" rows="10"></textarea>

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
    );
}

const ccc = (prev, next) => {
    // console.log(prev.value, next.value)
    // if (prev.restart !== next.restart) {
    //     return false
    // }

    return prev.value === next.value ? true : false

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

// export default React.memo(CustomSun, ccc);

export default CustomSun;



// class SunEditor extends Component {
//     constructor() {
//         super();
//         this.txtArea = createRef();
//     }
//     componentDidMount() {


//         this.editor = suneditor.create(this.txtArea.current);

//     }



//     componentWillUnmount() {
//         if (this.editor) this.editor.destroy(); // Contributed by https://github.com/AramRafeq
//     }

//     render() {

//         const dynamicName = {};
//         if (this.props.name) dynamicName.name = this.props.name;

//         return <textarea ref={this.txtArea} {...dynamicName} />;
//     }
// }

// export default SunEditor;