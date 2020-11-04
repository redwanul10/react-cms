import React, { useState, useMemo, useRef, useEffect, useCallback } from 'react';
import ReactQuill from 'react-quill';
import Modal from 'react-responsive-modal';
import 'react-quill/dist/quill.snow.css';


const QuillEditor = (props) => {

  const [editorValue, setEditorValue] = useState("");
  const [submited, setSubmited] = useState(false)
  const [modal, setModal] = useState(false)
  const closeModal = e => setModal(false)
  const insertStar = () => setModal(true)
  const editor = useRef(null)


  const modules = {
    toolbar: {
      container: `#${props.toolbarId}`,
      handlers: {
        "image": insertStar,
      }
    }
  }

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'color',
  ]


  const d = useMemo(() => {
    return (
      <ReactQuill
        theme="snow"
        ref={editor}
        value={editorValue}
        onChange={(result, e) => {
          console.log(props.value)
          setEditorValue(result)
        }}
        modules={modules}
        formats={formats}
      />
    )
  }, [submited])

  const src = "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"

  const insertImg = () => {
    if (!editor) return;
    const textEditor = editor.current.getEditor()
    console.log(editor)
    const cursor = textEditor.getSelection()
    textEditor.insertEmbed(cursor.index, "image", src)
    textEditor.setSelection(cursor.index + 7)
    console.log(textEditor.getContents())
    // editor.current.setEditorSelection(textEditor.getEditor(),2)
    //editor.current.blur()
  }

  useEffect(() => {
    setSubmited(!submited)
    setEditorValue("")
    if (editor) {
      const textEditor = editor.current.getEditor()
      // console.log(textEditor.blur)
      textEditor.blur()
    }
    document.body.click()
  }, [props.rerender])
  return (
    <div className="text-editor">
      <CustomToolbar toolbarId={props.toolbarId} />

      {d}
      {/* <ReactQuill 
      theme="snow" 
      ref={editor}
      onChange={(result,e) =>{
        // props.onChange("","editor",result)
        setEditorValue(result)
      //  props.onChange("","editor",result,props.name)
      }} 
      modules={modules}
      formats={formats}/> */}

      <Modal open={modal} onClose={closeModal} center>
        <h2 style={{ width: "800px" }}>Select Your Image</h2>
        <img onClick={insertImg} src={src} alt="" />
      </Modal>
      <h3 onClick={e => {

        setSubmited(!submited)
        setEditorValue("")
        console.log(editor.current)
        document.body.click()
      }}>Emty Editor</h3>
    </div>
  )
}



const CustomToolbar = ({ toolbarId }) => (
  <div id={toolbarId}>
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1"></option>
      <option value="2"></option>
      <option selected></option>
    </select>
    <button className="ql-bold"></button>
    <button className="ql-italic"></button>
    <button className="ql-underline"></button>
    <select className="ql-color">
      <option value="red"></option>
      <option value="green"></option>
      <option value="blue"></option>
      <option value="orange"></option>
      <option value="violet"></option>
      <option value="#d0d1d2"></option>
      <option selected></option>
    </select>

    <button className="ql-link"></button>
    <button className="ql-image"></button>
    <button className="ql-list" value="ordered"></button>
    <button className="ql-list" value="bullet"></button>
    <button className="ql-indent" value="-1"></button>
    <button className="ql-indent" value="+1"></button>
    <button className="ql-blockquote "></button>
    <button className="ql-strike"></button>
  </div>
)

export default QuillEditor