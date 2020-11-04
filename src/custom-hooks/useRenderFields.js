import React, { useContext, useState, useMemo, useReducer, useCallback, useEffect } from 'react';
import { stateContext } from '../components/StateProvider'
import DatePicker from '../components/inputs/DatePicker';
// import SwitchButton from "../components/inputs/SwitchButton";
import SwitchButton from "../components/inputs/Switch"
import "react-datepicker/dist/react-datepicker.css";
import Mce from '../components/inputs/TinymceEditor';
// import SunEditor, { options } from '../components/inputs/SunEditor'
import SunEditor from '../components/inputs/customEditor'
import Relational from '../components/inputs/Relational'
import RepeatableField from '../components/inputs/RepeatableField';
import ColorPicker from '../components/inputs/ColorPicker';
import Media from '../components/inputs/Media';
import Jodit from '../components/inputs/jodit';
import TextInput from '../components/inputs/TextInput';
import LongText from '../components/inputs/LongText';
import Section from '../components/inputs/Section';
import getEmtyValue from '../utill/getEmtyValue'
import SelectField from '../components/inputs/Select';


const useFields = (ok2, ok, toggleInput, parent) => {

    // const [fieldData, setFieldData] = useState({})
    const { state: { reInitSectionValue, fieldDataUpdated, errors, renderTextEditor, isActiveTextEditor, deletedField, submited, updateFieldList } } = useContext(stateContext)
    const [renderEditor, setRenderEditor] = useState(false)
    const [displayUpdateBtn, setDisplayUpdateBtn] = useState(false)

    console.log(renderTextEditor)


    const initialState = {
        // displayUpdateBtn: false
    }

    const [fieldData, dispatch] = useReducer((state, action) => {
        switch (action.type) {

            case "initial_value":
                return {
                    ...action.payload.value
                }
            case "change_input":
                return {
                    ...state,
                    ...action.payload
                }
            case "save_nested_value":
                console.log({
                    ...state,
                    [action.payload.key]: action.payload.value
                })
                return {
                    ...state,
                    [action.payload.key]: action.payload.value
                }

            case "reset":
                setDisplayUpdateBtn(false)
                return {
                    ...action.payload.emtyValue
                }

            case "delete_value":
                if (state.hasOwnProperty(action.payload.key))
                    delete state[action.payload.key]

                return {
                    ...state
                }

            case "set_value":
                setDisplayUpdateBtn(true)
                return {
                    ...action.payload.value,
                    // displayUpdateBtn: true
                }
            case "update_repeatable_item":
                const { key, updatedItem } = action.payload
                // alert(key)
                const itemIndex = state[key].findIndex(item => item.id === updatedItem.id)
                state[key][itemIndex] = updatedItem
                return {
                    ...state,
                    // displayUpdateBtn: false
                }

            case "delete_repeatable_item":

                const deleteItemId = action.payload.id
                const parentFieldKey = action.payload.parentFieldKey

                const filteredList = state[parentFieldKey].filter(item => item.id !== deleteItemId)
                state[parentFieldKey] = filteredList
                return {
                    ...state,
                    // displayUpdateBtn: false
                }

            default:
                return state;
        }
    }, initialState)


    const setInitialValue = (value) => {
        dispatch({
            type: "initial_value",
            payload: { value }
        })
    }

    // useEffect(() => {
    //     setInitialValue(values)
    // }, [values])


    useEffect(() => {
        if (deletedField) {
            // console.log(fieldData[deletedField.key])
            dispatch({
                type: "delete_value",
                payload: {
                    key: deletedField.key
                }
            })
        }
    }, [deletedField])




    const saveData = (key, value) => {
        console.log(key, value)
        dispatch({
            type: "change_input",
            payload: {
                [key]: value
            }
        })

        // if (parent) {
        //     parent.updateParentValue(parent.key, fieldData)
        // }
    }

    const saveNestedData = (key, value) => {
        dispatch({
            type: "save_nested_value",
            payload: {
                key,
                value
            }
        })
    }


    const editRepeatableItem = (value) => {
        dispatch({
            type: "set_value",
            payload: { value }
        })
    }

    const setValue = (value) => {
        dispatch({
            type: "set_value",
            payload: { value }
        })
    }

    const updateRepeatableItem = (groupFieldKey, updatedItem) => {
        dispatch({
            type: "update_repeatable_item",
            payload: { key: groupFieldKey, updatedItem }
        })
    }

    const deleteRepeatableItem = (id, parentFieldKey) => {
        dispatch({
            type: "delete_repeatable_item",
            payload: { id, parentFieldKey }
        })
    }

    const reset = emtyValue => {
        dispatch({
            type: "reset",
            payload: { emtyValue }
        })
    }


    const changeInput = (e, type, value, key) => {
        console.log("changing")
        if (type === 'editor') {

            saveData(key, value)
            return;
        }

        saveData(e.target.name, e.target.value)
    }



    const submit = emtyValue => {
        console.log(emtyValue)
        setRenderEditor(!renderEditor)

        dispatch({
            type: "reset",
            payload: { emtyValue }
        })
    }

    const onRepeate = (data, fieldKey) => {
        const value = fieldData[fieldKey] ? [data, ...fieldData[fieldKey]] : [data]
        saveData(fieldKey, value)
    }

    const handleEditor = (value, key) => {
        saveData(key, value)
    }

    const handleSelect = (value, key) => {
        saveData(key, value)
    }



    const renderInputFields = (field, isSubmit, index, fieldOptions, isNestedSection) => {
        switch (field.type) {
            case 'RichTextEditor':

                return (
                    // <Jodit
                    //     {...fieldOptions.media}
                    //     options={{ ...fieldOptions.textEditor }}
                    //     index={index}
                    //     RichTextEditor={renderTextEditor}
                    //     name={field.key}
                    //     onChange={changeInput}
                    //     rerender={renderEditor}
                    //     handleEditor={handleEditor}
                    //     value={fieldData[field.key] || ""}
                    //     isActive={isActiveTextEditor}
                    //     title={field.title}
                    //     submited={submited}
                    //     updateFieldList={updateFieldList}
                    // />
                    // <CustomSunEditor
                    //     contents={fieldData[field.key] || ""}
                    //     options={options}
                    //     id={field.key}
                    //     onChange={value => console.log(value)}
                    //     onInit={editor => console.log(editor)}
                    // />
                    // <Mce
                    //     {...fieldOptions.media}
                    //     options={{ ...fieldOptions.textEditor }}
                    //     index={index}
                    //     RichTextEditor={renderTextEditor}
                    //     name={field.key}
                    //     onChange={changeInput}
                    //     rerender={renderEditor}
                    //     handleEditor={handleEditor}
                    //     value={fieldData[field.key] || ""}
                    //     isActive={isActiveTextEditor}
                    //     title={field.title}
                    //     submited={submited}
                    //     updateFieldList={updateFieldList}
                    //     errorMsg={errors[field.key] || ""}
                    //     isNewValue={reInitSectionValue}
                    // />
                    // <SunEditor
                    //     {...fieldOptions.media}
                    //     options={{ ...fieldOptions.textEditor }}
                    //     restart={renderTextEditor}
                    //     index={index}
                    //     RichTextEditor={renderTextEditor}
                    //     name={field.key}
                    //     onChange={changeInput}
                    //     rerender={renderEditor}
                    //     handleEditor={handleEditor}
                    //     value={fieldData[field.key] || ""}
                    //     isActive={isActiveTextEditor}
                    //     title={field.title}
                    //     submited={submited}
                    //     updateFieldList={updateFieldList}
                    //     isRequired={field.required}
                    //     errorMsg={errors[field.key] || ""}
                    // />


                    <SunEditor
                        {...fieldOptions.media}
                        options={{ ...fieldOptions.textEditor }}
                        restart={renderTextEditor}
                        index={index}
                        RichTextEditor={renderTextEditor}
                        name={field.key}
                        onChange={value => saveData(field.key, value)}
                        rerender={renderEditor}
                        handleEditor={handleEditor}
                        value={fieldData[field.key] || ""}
                        isActive={isActiveTextEditor}
                        title={field.title}
                        submited={submited}
                        isNewValue={reInitSectionValue}
                        updateFieldList={updateFieldList}
                        isRequired={field.required}
                        minChar={field.minChar}
                        maxChar={field.maxChar}
                        errorMsg={errors[field.key] || ""}
                    />


                    // <CustomSunEditor
                    //     name={field.key}
                    //     onChange={handleEditor}
                    //     rerender={isSubmit ? isSubmit : renderEditor}
                    //     RichTextEditor={RichTextEditor}
                    //     handleEditor={handleEditor}
                    //     value={fieldData[field.key] || ""}
                    //     onInit={() => { }}
                    //     setContents={""}
                    //     id={field.key}
                    // />
                )

            case 'Section':
                return (
                    <div className="SECTION">
                        {/* {field.fields.map(singleField => (
                            <>
                                <h2>{singleField.title}</h2>
                                {renderInputFields(singleField)}
                            </>
                        ))} */}
                        <Section
                            fieldOptions={fieldOptions}
                            onRepeate={onRepeate}
                            // values={fieldData[field.key] ? { ...fieldData[field.key] } : {}}
                            values={fieldData[field.key]}
                            // jsonvalues={fieldData[field.key] ? JSON.stringify({ ...fieldData[field.key] }) : JSON.stringify({})}
                            jsonvalues={JSON.stringify(fieldData[field.key] || {})}
                            fieldData={field}
                            toggleInput={toggleInput}
                            RichTextEditor={renderTextEditor}
                            isActiveTextEditor={isActiveTextEditor}
                            rerender={submited}
                            // rerender={isSubmit ? isSubmit : renderEditor}
                            saveData={!isNestedSection ? saveData : saveNestedData}
                            updateRepeatableItem={updateRepeatableItem}
                            updateFieldList={updateFieldList}
                            isNewValue={reInitSectionValue}
                        />
                    </div>
                )

            case 'Repeatable':
                return (
                    <RepeatableField
                        fieldOptions={fieldOptions}
                        onRepeate={onRepeate}
                        values={fieldData[field.key] || []}
                        fieldData={field}
                        jsonFieldData={JSON.stringify(field || {})}
                        toggleInput={toggleInput}
                        RichTextEditor={renderTextEditor}
                        isActiveTextEditor={isActiveTextEditor}
                        rerender={submited}
                        updateRepeatableItem={updateRepeatableItem}
                        deleteRepeatableItem={deleteRepeatableItem}
                        updateFieldList={updateFieldList}
                    />

                )

            case 'Reational':
                return (
                    <Relational
                        name={field.key}
                        onChange={handleSelect}
                        rerender={isSubmit ? isSubmit : renderEditor}
                        value={fieldData[field.key] || ""}
                    />
                )


            case 'TextArea':
                return (
                    <LongText
                        name={field.key}
                        value={fieldData[field.key] || ""}
                        onChange={changeInput}
                        errorMsg={errors[field.key] || ""}
                        rerender={submited}
                        saveData={saveData}
                    />
                )

            case 'DatePicker':
                return (

                    <DatePicker
                        name={field.key}
                        saveData={saveData}
                        placeholderText="Select Date"
                        value={fieldData[field.key] || ""}
                        errorMsg={errors[field.key] || ""}
                        rerender={submited}
                        isRequired={field.required}
                    />

                )

            case 'ColorPicker':
                return (

                    <ColorPicker
                        name={field.key}
                        onChange={handleEditor}
                        color={fieldData[field.key] || "black"}
                        errorMsg={errors[field.key] || ""}
                        rerender={submited}
                    />

                )

            case 'File':
                return (
                    <Media
                        {...fieldOptions.media}
                        name={field.key}
                        selected={fieldData[field.key] || ""}
                        onChange={image => {
                            saveData(field.key, image)
                        }}
                        errorMsg={errors[field.key] || ""}
                        rerender={submited}
                        isRequired={field.required}
                    />
                )

            case 'Select':
                return (
                    <SelectField
                        options={field.options}
                        name={field.key}
                        selected={fieldData[field.key] || ""}
                        onChange={changeInput}
                        errorMsg={errors[field.key] || ""}
                        rerender={submited}
                    />
                )

            case 'Boolean':
                return (

                    <label>
                        <SwitchButton
                            saveData={saveData}
                            name={field.key}
                            value={fieldData[field.key] || false}
                            errorMsg={errors[field.key] || ""}
                            rerender={submited}
                        />
                    </label>

                )

            default:
                return (
                    <TextInput
                        restart={renderTextEditor}
                        toggleInput={toggleInput}
                        onChange={changeInput}
                        class="form-control"
                        name={field.key}
                        value={fieldData[field.key] || ""}
                        isRequired={field.required}
                        minChar={field.minChar}
                        maxChar={field.maxChar}
                        errorMsg={errors[field.key] || ""}
                        saveData={saveData}
                        updateFieldList={updateFieldList}
                        fieldDataUpdated={fieldDataUpdated}
                        rerender={isSubmit ? renderEditor : submited}
                    />
                )
        }
    }

    return {
        submit,
        renderInputFields,
        fieldData,
        editRepeatableItem,
        setValue,
        updateRepeatableItem,
        deleteRepeatableItem,
        reset,
        displayUpdateBtn,
        setInitialValue,
        reRender: renderEditor
    }

}

export default useFields;






