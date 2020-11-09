import React, { useEffect, useState } from 'react';
import './App.css';
import StateProvider from './components/StateProvider'
import CreatContentType from './components/createContentType'
import Navbar from './components/Navbar';
import FieldList from './components/FieldList'
import DisplayInputFields from './components/DisplayInputFields';
import AddFields from './components/AddFields';
import QuillEditor from './components/inputs/customQuill';
import CustomSun from './components/inputs/customEditor';

function App() {

  const [images, setImages] = useState([])
  const [videos, setVideos] = useState([])
  const [fields, setFields] = useState({})
  const [post, setPost] = useState([])
  const [value, setValue] = useState({})
  // {
  //   image: "http://suneditor.com/docs/cat.jpg",
  //   description: "<h1>hello world</h1>\n<p>this is content</p>",
  //   author: "redwan",
  //   created: "Sun Sep 20 2020 00:00:00 GMT+0600 (Bangladesh Standard Time)"
  // }
  // )

  const fetchImages = () => {
    fetch('https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo')
      .then(res => res.json())
      .then(data => setImages(data.result))
  }

  const fetchVideos = () => {
    fetch('https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo')
      .then(res => res.json())
      .then(data => setVideos(data.result))
  }

  const media = {
    fetchImages,
    images,
    videos,
    fetchVideos,
    handleUpload: (e, files) => {
      const imgs = []
      files.forEach(file => imgs.push({
        src: URL.createObjectURL(file)
      }))

      setImages([...imgs, ...images])
      e.target.value = ""
    },
    fetchMoreImages: () => {
      fetch('https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo')
        .then(res => res.json())
        .then(data => setImages([...images, ...data.result]))
    },
    fetchMoreVideos: () => {
      fetch('https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo')
        .then(res => res.json())
        .then(data => setVideos([...videos, ...data.result]))
    },

  }

  const textEditorOptions = {
    enableDragAndDropFileToEditor: false,
    showPlaceholder: true,
    readonly: false,
    extraButtons: [
      {
        name: 'APP BUTTON',
        iconURL: 'https://img.icons8.com/gif',
        exec: function (editor) {
          alert("Custom Button")
        }
      }
    ]
  }

  return (
    <StateProvider>
      {/* <Navbar /> */}
      {/* <CreatContentType /> */}
      {/* <FieldList /> */}
      <AddFields
        models={[
          { value: 'Blog', label: 'Blog' },
          { value: 'Catagory', label: 'Catagory' },
          { value: 'Author', label: 'Author' },
        ]}
        onSubmit={MODEL => setFields({ ...MODEL })}
        onUpdate={updatedModel => {
          // alert(JSON.stringify(updatedModel, null, 2))
          // setFields({ ...updatedModel })
        }}
      />

      {post.map(item => <div onClick={e => setValue({ ...item })}>{item.author}</div>)}

      {/* <div className="row">
        <div className="col-md-6 offset-md-3">
          <QuillEditor />
        </div>
      </div> */}
      {/* <CustomSun /> */}
      <DisplayInputFields
        model={fields}
        jsonValue={JSON.stringify(fields)}
        fieldValue={value}
        media={media}
        textEditor={textEditorOptions}
        getRelationalDDL_Data={(type, setValue) => {
          const options = [
            { value: 'catagory', label: 'catagory' },
            { value: 'catagory 2', label: 'catagory 2' },
            { value: 'catagory 3', label: 'catagory 3' },
          ];
          setTimeout(() => setValue(options), 8000)
        }}
        onSubmit={(data) => {
          alert(JSON.stringify(data, null, 2))
          setPost([...post, data])
        }}
      />

    </StateProvider>
  );
}


export default App;
