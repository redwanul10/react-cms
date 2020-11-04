import React, { useContext, useState } from 'react';
import { stateContext } from './StateProvider'
import Switch from "react-switch";
import Select from 'react-select'
import uid from 'uid';

const FieldForm = (props) => {
    const {
        addField,
        updateField,
        state,
        dispatch
    } = useContext(stateContext)

    const {
        contentTypeId,
        fieldId,
        title,
        description
    } = props


    const initState = {
        title: "",
        key: "",
        fieldId: uid(20),
        required: false,
        description: ""
    }

    const [fieldData, setFieldData] = useState(props.Edit ? state.selectedField && state.selectedField.field : initState)

    const changeInput = (e) => {

        setFieldData({
            ...fieldData,
            [e.target.name]: e.target.value
        })
    }

    const handleSwitch = data => setFieldData({
        ...fieldData,
        required: data
    })

    const fieldSubmit = (e) => {
        e.preventDefault()
        !props.Edit
            ? addField({ fieldData })
            : handleUpdateField()

        setFieldData({ title: "", key: "", description: "" })
    }

    const handleUpdateField = () => {

        updateField({ fieldData, groupFieldId: state.selectedField.groupFieldId || "", nested: state.selectedField.nested || false })
        setTimeout(() => {
            dispatch({
                type: "Disable_FieldData_Update",
            })
        }, 2000)
    }

    // Detect is its a SelectedField or Not
    const isSelect =
        (state.selectedField && state.selectedField.type === "Select") ||
            fieldData.hasOwnProperty("options") ? true : false

    // Detect is RelationalField or Not
    const isRelational =
        state.selectedField && state.selectedField.type === "Reational" ? true : false

    return (
        <>
            <div class="form-group">
                <label for="exampleInputPassword1">Field Title</label>
                <input onChange={e => changeInput(e)} name="title" type="text" class="form-control" value={fieldData.title} />
            </div>

            {!props.Edit && (<div class="form-group">
                <label for="exampleInputPassword1">Field Key</label>
                <input onChange={e => changeInput(e)} name="key" type="text" class="form-control" value={fieldData.key} />
            </div>)
            }
            <div class="form-group">
                <label for="exampleInputPassword1">Field Description</label>
                <input onChange={e => changeInput(e)} name="description" type="text" class="form-control" value={fieldData.description} />
            </div>

            {/* {(state.selectedField && state.selectedField.type === "Select") && (
                <div class="form-group">
                    <label for="exampleInputPassword1">Select Options</label>
                    <textarea onChange={e => changeInput(e)} name="options" type="text" class="form-control" value={fieldData.options || ""} cols="20" rows="5"></textarea>
                </div>
            )} */}

            {isSelect && (
                <div class="form-group">
                    <label for="exampleInputPassword1">Select Options</label>
                    <textarea onChange={e => changeInput(e)} name="options" type="text" class="form-control" value={fieldData.options || ""} cols="20" rows="5"></textarea>
                </div>
            )}

            {isRelational && (
                <div class="form-group">
                    <label for="exampleInputPassword1">Select Relation Type</label>
                    <Select
                        options={[
                            { value: "oneToManu", label: "One To Many" },
                            { value: "oneToOne", label: "One To One" },
                            { value: "manyToMany", label: "Many To Many" }
                        ]}
                        onInputChange={e => console.log("typing")}
                        onChange={selected => console.log(selected)}
                    />
                </div>
            )}

            {/* {state.selectedField.field && state.selectedField.field.type === "Select" && (
                <div class="form-group">
                    <label for="exampleInputPassword1">Select Options</label>
                    <textarea onChange={e => changeInput(e)} name="options" type="text" class="form-control" value={fieldData.options || state.selectedField.field.options || ""} cols="20" rows="5"></textarea>
                </div>
            )} */}

            <div className="form-group">
                <label htmlFor="" >Required</label>
                <div style={{ dispaly: "block" }}>
                    <Switch
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        onChange={data => {
                            handleSwitch(data)
                        }}
                        checked={fieldData.required} />
                </div>
            </div>
            <a href="#" onClick={e => fieldSubmit(e)} className="btn btn-primary">Done</a>
        </>
    );
}

export default FieldForm;