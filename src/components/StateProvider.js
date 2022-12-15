import React, { createContext, useReducer } from "react";
import reducer from "../reducer";

export const stateContext = createContext();

// Initial State
const initState = {
  activeIndex: 0,
  fields: [
    { type: "String", value: "" },
    { type: "Number", value: "" },
    { type: "TextArea", value: "" },
    { type: "File", value: "" },
    { type: "RichTextEditor", value: "" },
    { type: "Repeatable", value: [] },
    { type: "ColorPicker", value: "" },
    { type: "Reational", value: "" },
    { type: "Section", value: [] },
    { type: "DatePicker", value: "" },
    { type: "Boolean", value: "" },
    { type: "Select", value: "" },
  ],
  reInitSectionValue: false,
  rootValue: {},
  updateFieldList: false,
  fieldDataUpdated: false,
  enableListUpdate: false,
  renderTextEditor: false,
  isActiveTextEditor: false,
  submited: false,
  selectedField: null,
  deletedField: null,
  modal: false,
  sortModal: false,
  groupFieldId: null,
  groupFieldType: null,
  editModal: false,
  editField: false,
  errors: {},
  contentTypes: [
    {
      name: "post",
      id: 1,
      fields: [
        {
          required: true,
          description: "",
          fieldId: "sdfsfwerwer",
          key: "image",
          title: "image",
          type: "File",
          value: "",
        },
        {
          required: true,
          description: "",
          fieldId: "vxlfvu1dsfwwwi32j5bly2bpij",
          key: "description",
          title: "Description",
          type: "RichTextEditor",
          value: "",
        },
        {
          required: true,
          minChar: 5,
          maxChar: 10,
          description: "",
          fieldId: "vxlfvu1i32jfdw5bly2bpij",
          key: "author",
          title: "author",
          type: "String",
          value: "",
        },
        {
          required: true,
          description: "",
          fieldId: "vxlfvu1i32j5dfhdfgdwewbly2bpij",
          key: "created",
          title: "created",
          type: "DatePicker",
          value: "",
        },
      ],
      type: "Repeatable",
    },
  ],
  newContentType: null,
};

const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  // window.global = state.contentTypes[0].fields

  // SUBMIT
  const toggleSubmit = () => dispatch({ type: "TOGGLE_SUBMIT" });

  // ERRORS
  const saveErrors = (errors) => {
    dispatch({ type: "SAVE_ERRORS", payload: { errors } });
    console.log(errors);
  };

  // MODAL HANDELAR
  const activeModal = () => dispatch({ type: "ACTIVE_MODAL" });
  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });
  const activeEditModal = (payload) =>
    dispatch({ type: "Active_EDIT_MODAL", payload });
  const closeEditModal = () => dispatch({ type: "CLOSE_EDIT_MODAL" });
  const activeSortModal = (payload) =>
    dispatch({ type: "ACTIVE_SORT_MODAL", payload });
  const closeSortModal = (payload) =>
    dispatch({ type: "CLOSE_SORT_MODAL", payload });

  // FIELD HANDELAR
  const setGroupFeild = (groupField) =>
    dispatch({ type: "SET_GROUP_FIELD", payload: groupField });
  const selectField = (field) =>
    dispatch({ type: "SELECT_FIELD", payload: field });
  const updateField = (payload) => dispatch({ type: "UPDATE_FIELD", payload });
  const deleteField = (payload) => dispatch({ type: "DELETE_FIELD", payload });
  const addField = (payload) => dispatch({ type: "ADD_FIELD", payload });

  const reInitSectionValue = (value) =>
    dispatch({ type: "RE_INIT_SECTION_VALUE", payload: value });

  // CONTENT TYPE HANDELAR
  const createContentType = (ContentType) =>
    dispatch({ type: "CREATE_CONTENT_TYPE", payload: ContentType });

  const selectContentType = (index) =>
    dispatch({ type: "SELECT_CONTENT_TYPE", payload: { index } });

  const value = {
    state,
    dispatch,
    activeModal,
    closeModal,
    selectField,
    addField,
    createContentType,
    deleteField,
    updateField,
    activeEditModal,
    closeEditModal,
    setGroupFeild,
    toggleSubmit,
    reInitSectionValue,
    saveErrors,
    activeSortModal,
    closeSortModal,
    selectContentType,
  };
  return (
    <stateContext.Provider value={value}>
      {props.children}
    </stateContext.Provider>
  );
};

export default StateProvider;
