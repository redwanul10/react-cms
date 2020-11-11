import React, { useContext, useState } from 'react';
import { stateContext } from './StateProvider'
import FieldForm from './FieldForm'
import Modal from 'react-responsive-modal';
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';

export const DragHandle = sortableHandle(() => <span className="handle"></span>);


export const FilterContainer = sortableContainer(({ children }) => {
  return (
    <div class="list-group" id="list-tab">
      {children}
    </div>
  );
});


export const FilterItem = sortableElement(React.memo(({ value, contentTypeId, className }) => {

  const {
    deleteField,
    activeEditModal,
    setGroupFeild,
    activeModal,
    activeSortModal
  } = useContext(stateContext)

  const [active, setActive] = useState(false)

  // const { fieldId, title, description } = value
  // const [modal,setModal] = useState(false)
  console.log(value)

  const addInnerField = (groupField) => {
    console.log("add inner field")
    setGroupFeild(groupField)
    activeModal()
  }

  const toggleRepeatableFields = (e) => {
    e.preventDefault()
    setActive(!active)
  }

  const renderField = (field, id) => {
    return (
      <div class={`list-group-item list-group-item-action ${className} ${field.type === "Repeatable" ? "repeatable" : ""}`}>
        <DragHandle />
        {field.title}
        {/* <div className="icons_wrapper"> */}
        <span className="span" onClick={e => deleteField({ ...field, contentTypeId, groupFieldId: id ? id : "" })}>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
        <span className="span edit" onClick={e => activeEditModal({ field: field })}>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </span>

        {(field.type === "Repeatable" || field.type === "Section") && (
          <span className="span" style={{ right: "12px" }} onClick={e => activeSortModal({ field: field })}>
            <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
          </span>
        )}

        {/* </div> */}

        {(field.type === "Repeatable" || field.type === "Section") && (
          <span>
            <span className="span add" onClick={e => addInnerField(field)}>
              <i class="fa fa-plus" aria-hidden="true"></i>
            </span>
            <span style={{ right: "55px" }} onClick={toggleRepeatableFields} className="span add">
              {active
                ? <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
                : <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
              }
            </span>
          </span>
        )}

        {(field.type === "Repeatable" || field.type === "Section") && (
          <div className="repeatable_fields_wrapper" style={{ display: active ? "block" : "none" }}>
            {field.fields.map(Field => (
              field.type === "Repeatable" || field.type === "Section"
                ? renderField(Field, field.fieldId)
                : (
                  <a class="list-group-item list-group-item-action ">
                    {/* <DragHandle /> */}
                    {field.title}
                    {/* <div className="icons_wrapper"> */}
                    <span className="span" onClick={e => deleteField({ ...field, contentTypeId, groupFieldId: field.fieldId })}>
                      <i class="fa fa-trash-o" aria-hidden="true"></i>
                    </span>
                    <span className="span edit" onClick={e => activeEditModal({ field, groupFieldId: field.fieldId, nested: true, contentTypeId })}>
                      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    </span>
                    {/* </div> */}
                  </a>
                )
            )

            )}
          </div>

        )}
        <div className="inv_elm"></div>
        <div className="ddL_menu">
          <a className="ddl_item" href="#">Action</a>
          <a className="ddl_item" href="#">Another Action</a>
          <a className="ddl_item" href="#">Final</a>
        </div>
      </div>
    )
  }

  return (
    <>
      {renderField(value)}
      {/* <a class={`list-group-item list-group-item-action ${value.type === "Repeatable" ? "repeatable" : ""}`}>
        <DragHandle />
        {value.title}
        <span className="span" onClick={e => deleteField({ ...value, contentTypeId })}>
          <i class="fa fa-trash-o" aria-hidden="true"></i>
        </span>
        <span className="span edit" onClick={e => activeEditModal({ field: value })}>
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </span>
        {(value.type === "Repeatable" || value.type === "Section") && (
          <span>
            <span className="span add" onClick={e => addInnerField(value.fieldId)}>
              <i class="fa fa-plus" aria-hidden="true"></i>
            </span>
            <span onClick={toggleRepeatableFields} style={{ marginRight: "84px" }} className="span add">
              {active
                ? <i class="fa fa-chevron-circle-up" aria-hidden="true"></i>
                : <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
              }
            </span>
          </span>
        )}

        {(value.type === "Repeatable" || value.type === "Section") && (
          <div className="repeatable_fields_wrapper" style={{ display: active ? "block" : "none" }}>
            {value.fields.map(field =>
              <a class="list-group-item list-group-item-action ">
                {field.title}
                <span className="span" onClick={e => deleteField({ ...field, contentTypeId, groupFieldId: value.fieldId })}>
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </span>
                <span className="span edit" onClick={e => activeEditModal({ field, groupFieldId: value.fieldId, nested: true, contentTypeId })}>
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </span>
              </a>
            )}
          </div>

        )}

      </a> */}

      {/* <Modal open={modal} onClose={e=>setModal(false)} center>
        <FieldForm Edit 
        title={title} 
        description={description} 
        contentTypeId={contentTypeId}
        fieldId={fieldId}
        />
      </Modal> */}
    </>
  )
}));


