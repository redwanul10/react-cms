import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AddFields from "./components/AddFields";
import CreatContentType from "./components/createContentType";
import DisplayInputFields from "./components/DisplayInputFields";
import Landing from "./pages/Landing";
import * as API from "./request";

export default function Navigation(props) {
  const {
    setFields,
    setValue,
    fields,
    currentIndex,
    value,
    media,
    textEditorOptions,
    onSubmit,
    posts,
  } = props;
  return (
    <Routes>
      <Route
        path="/content/:type"
        element={
          <Landing
            posts={posts}
            schema={fields[currentIndex] || {}}
            setFields={setFields}
          />
        }
      />
      <Route
        path="/content/:type/create"
        element={
          <DisplayInputFields
            model={fields[currentIndex] || {}}
            jsonValue={JSON.stringify(fields[currentIndex] || {})}
            fieldValue={value}
            media={media}
            textEditor={textEditorOptions}
            getRelationalDDL_Data={async (type, setValue) => {
              const data = await API.getLandingData(type.value);

              setValue(
                data.map((item) => ({ value: item?._id, label: item?.name }))
              );
            }}
            onSubmit={onSubmit}
            setFields={setFields}
          />
        }
      />
      <Route
        path="/content/:type/edit"
        element={
          <DisplayInputFields
            model={fields[currentIndex] || {}}
            jsonValue={JSON.stringify(fields[currentIndex] || {})}
            fieldValue={value}
            media={media}
            textEditor={textEditorOptions}
            getRelationalDDL_Data={async (type, setValue) => {
              const data = await API.getLandingData(type.value);

              setValue(
                data.map((item) => ({ value: item?._id, label: item?.name }))
              );
            }}
            onSubmit={onSubmit}
            setFields={setFields}
            setValue={setValue}
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
            onSave={(modelSchema) => {
              console.log(modelSchema);
              API.seaveModel({
                name: modelSchema.name,
                schema: modelSchema.fields,
              });
            }}
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
