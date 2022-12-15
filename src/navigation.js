import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddFields from "./components/AddFields";
import CreatContentType from "./components/createContentType";
import DisplayInputFields from "./components/DisplayInputFields";

export default function Navigation(props) {
  const {
    setFields,

    fields,
    currentIndex,
    value,
    media,
    textEditorOptions,
    onSubmit,
  } = props;
  return (
    <Routes>
      <Route
        path="/content/:type"
        element={
          <DisplayInputFields
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
            onSubmit={onSubmit}
            setFields={setFields}
          />
        }
      />

      <Route path="/model/create" element={<CreatContentType />} />
      <Route
        path="/model/:id"
        element={
          <AddFields
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
          />
        }
      />
    </Routes>
  );
}
