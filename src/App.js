import React, { useEffect, useState } from "react";
import "./App.css";
import StateProvider from "./components/StateProvider";
import CreatContentType from "./components/createContentType";
import Navbar from "./components/Navbar";
import FieldList from "./components/FieldList";
import DisplayInputFields from "./components/DisplayInputFields";
import AddFields from "./components/AddFields";
import QuillEditor from "./components/inputs/customQuill";
import CustomSun from "./components/inputs/customEditor";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";

function App() {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [fields, setFields] = useState({});
  const [post, setPost] = useState([]);
  const [value, setValue] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  // {
  //   image: "http://suneditor.com/docs/cat.jpg",
  //   description: "<h1>hello world</h1>\n<p>this is content</p>",
  //   author: "redwan",
  //   created: "Sun Sep 20 2020 00:00:00 GMT+0600 (Bangladesh Standard Time)"
  // }
  // )

  const fetchImages = () => {
    fetch(
      "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo"
    )
      .then((res) => res.json())
      .then((data) => setImages(data.result));
  };

  const fetchVideos = () => {
    fetch(
      "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo"
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.result));
  };

  const media = {
    fetchImages,
    images,
    videos,
    fetchVideos,
    handleUpload: (e, files) => {
      const imgs = [];
      files.forEach((file) =>
        imgs.push({
          src: URL.createObjectURL(file),
        })
      );

      setImages([...imgs, ...images]);
      e.target.value = "";
    },
    fetchMoreImages: () => {
      fetch(
        "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo"
      )
        .then((res) => res.json())
        .then((data) => setImages([...images, ...data.result]));
    },
    fetchMoreVideos: () => {
      fetch(
        "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo"
      )
        .then((res) => res.json())
        .then((data) => setVideos([...videos, ...data.result]));
    },
  };

  const textEditorOptions = {
    enableDragAndDropFileToEditor: false,
    showPlaceholder: true,
    readonly: false,
    extraButtons: [
      {
        name: "APP BUTTON",
        iconURL: "https://img.icons8.com/gif",
        exec: function (editor) {
          alert("Custom Button");
        },
      },
    ],
  };

  return (
    <BrowserRouter>
      <StateProvider>
        <div className="c_container">
          <div className="sidebar">
            <Navbar
              onClick={(navigate, menuName) => navigate("/content/" + menuName)}
              setCurrentIndex={setCurrentIndex}
            />

            <Accordion
              allowZeroExpanded
              preExpanded={["a"]}
              style={{ background: "#2b303b", cursor: "pinter" }}
            >
              <AccordionItem uuid="a">
                <AccordionItemHeading
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  <AccordionItemButton>Models</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Navbar navbar setCurrentIndex={setCurrentIndex} />
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
            {/* <Navbar setCurrentIndex={setCurrentIndex} /> */}
          </div>
          <div className="main">
            <Navigation
              setFields={setFields}
              // content page props
              posts={post}
              fields={fields}
              currentIndex={currentIndex}
              value={value}
              media={media}
              textEditorOptions={textEditorOptions}
              onSubmit={(data) => {
                alert(JSON.stringify(data, null, 2));
                setPost([...post, data]);
              }}
            />
            {/* <AddFields
            models={[
              { value: "Blog", label: "Blog" },
              { value: "Catagory", label: "Catagory" },
              { value: "Author", label: "Author" },
            ]}
            onSubmit={(MODEL) => {
              console.log("====== MMMM =====", MODEL);
              setFields({ ...MODEL });
            }}
            onUpdate={(updatedModel) => {
              // alert(JSON.stringify(updatedModel, null, 2))
              // setFields({ ...updatedModel })
            }}
          /> */}
          </div>
        </div>
        {/* <CreatContentType /> */}
        {/* <FieldList /> */}

        {post.map((item) => (
          <div onClick={(e) => setValue({ ...item })}>{item.author}</div>
        ))}

        {/* <div className="row">
        <div className="col-md-6 offset-md-3">
          <QuillEditor />
        </div>
      </div> */}
        {/* <CustomSun /> */}
        {/* <DisplayInputFields
          model={fields[currentIndex] || {}}
          jsonValue={JSON.stringify(fields[currentIndex] || {})}
          fieldValue={value}
          media={media}
          textEditor={textEditorOptions}
          getRelationalDDL_Data={(type, setValue) => {
            const options = [
              { value: "catagory", label: "catagory" },
              { value: "catagory 2", label: "catagory 2" },
              { value: "catagory 3", label: "catagory 3" },
            ];
            setTimeout(() => setValue(options), 8000);
          }}
          onSubmit={(data) => {
            alert(JSON.stringify(data, null, 2));
            setPost([...post, data]);
          }}
        /> */}
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
