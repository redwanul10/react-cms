// import React, { useContext, useState, useMemo, useEffect } from 'react';
// import { stateContext } from './StateProvider'
// import "react-datepicker/dist/react-datepicker.css";
// import useFields from '../custom-hooks/useRenderFields'
// import useFieldValidation from '../custom-hooks/useFieldValidation';


// const DisplayInputFields = (props) => {

//     const { state, dispatch, toggleSubmit, saveErrors } = useContext(stateContext)
//     const [rerender, setRerender] = useState(false)
//     const [customFields, setCustomFields] = useState([])
//     const [sortIndex, setSortIndex] = useState({})



//     const toggleInput = () => {
//         dispatch({
//             type: "TOGGLE_EDITOR",
//         })
//     }

//     const customHooks = useFields(state.renderTextEditor, state.isActiveTextEditor, toggleInput)
//     const { extractValidation, validateValues } = useFieldValidation(saveErrors)

//     useEffect(() => {
//         // setTimeout(() => {
//         setCustomFields([...state.contentTypes[0].fields])
//         const SortIndex = {}
//         state.contentTypes[0].fields.map((field, i) => {
//             SortIndex[field.key] = i
//         })

//         setSortIndex(SortIndex)

//         // }, 500)
//     }, [state.updateFieldList])

//     useEffect(() => {
//         extractValidation(customFields)
//     }, [customFields])


//     useEffect(() => {
//         // setTimeout(() => {
//         const SortIndex = {}
//         state.contentTypes[0].fields.map((field, i) => {
//             SortIndex[field.key] = i
//         })

//         setSortIndex(SortIndex)
//         // }, 500)
//     }, [state.renderTextEditor])


//     return useMemo(() => (
//         <div className="col-md-4 offset-md-5">
//             <div className="inputFields flexColumn">

//                 {customFields.map((field, index) => (
//                     <div class="form-group box" style={{ order: sortIndex[field.key] }}>
//                         <h4 >{field.title}</h4>

//                         {customHooks.renderInputFields(field, "", index, props)}

//                         <small id="emailHelp" class="form-text text-muted">
//                             {field.description}
//                         </small>

//                     </div>
//                 ))}

//             </div>
//             <h2 className="btn-large" onClick={() => {
//                 const { error, errorMsg } = validateValues(customHooks.fieldData)
//                 if (!error) {
//                     props.onSubmit(customHooks.fieldData)
//                     customHooks.submit()
//                     toggleSubmit()
//                     saveErrors({})
//                 } else {
//                     // alert(JSON.stringify(errorMsg))
//                     saveErrors(errorMsg)
//                 }
//                 // props.onSubmit(customHooks.fieldData)
//                 // window.result = customHooks.fieldData
//                 // window.model = customFields
//                 // customHooks.submit()
//                 // toggleSubmit()
//             }}>submit</h2>
//         </div>


//     ), [customFields, sortIndex, customHooks.fieldData, props, state.errors])
// }

// export default DisplayInputFields;


import React, { useContext, useState, useMemo, useEffect, useCallback } from 'react';
import { stateContext } from './StateProvider'
import "react-datepicker/dist/react-datepicker.css";
import useFields from '../custom-hooks/useRenderFields'
import useFieldValidation from '../custom-hooks/useFieldValidation';
import getEmtyValue from '../utill/getEmtyValue'
import getFieldsLength from '../utill/getFieldsLength'
import merge from 'deepmerge'



const DisplayInputFields = (props) => {

    const { state, dispatch, toggleSubmit, saveErrors, reInitSectionValue } = useContext(stateContext)
    const [loading, setLoading] = useState(false)
    const [customFields, setCustomFields] = useState([])
    const [sortIndex, setSortIndex] = useState({})
    const [textObj, setTextObj] = useState('{"fields":[]}')
    const [emty, setEmty] = useState({})



    const toggleInput = () => {
        dispatch({
            type: "TOGGLE_EDITOR",
        })
    }

    const customHooks = useFields(state.renderTextEditor, state.isActiveTextEditor, toggleInput)
    const { extractValidation, validateValues, validations } = useFieldValidation(saveErrors)



    useEffect(() => {
        if (!props.model.fields) return

        const emtyValue = getEmtyValue(props.model.fields)
        const merged = merge(emtyValue, props.fieldValue)



        // if (getFieldsLength(props.model.fields) !== getFieldsLength(customFields))
        //     setCustomFields([...props.model.fields])

        // if (!state.enableListUpdate) {
        //     console.log("state changed")
        //     setCustomFields([...props.model.fields])
        // }

        // console.log(getEmtyValue(props.model.fields))

        const json = JSON.parse(props.jsonValue)
        const json2 = JSON.parse(textObj)
        console.log(getFieldsLength(json.fields), getFieldsLength(json2.fields))

        if (getFieldsLength(json.fields) !== getFieldsLength(json2.fields)) {


            setCustomFields([...props.model.fields])
            setTextObj(props.jsonValue)
            extractValidation([...props.model.fields])


        }

        // setTextObj(props.jsonValue)
        customHooks.setInitialValue(merged)
        reInitSectionValue(merged)



        if (state.fieldDataUpdated) setCustomFields([...props.model.fields])

        const SortIndex = {}

        props.model.fields.map((field, i) => {
            SortIndex[field.key] = i
        })

        setSortIndex(SortIndex)

    }, [props.model, props.model.fields, props.fieldValue])



    const handleSubmit = () => {

        const emtyValue = getEmtyValue(customFields)
        const { error, errorMsg } = validateValues(customHooks.fieldData)

        if (!error) {
            props.onSubmit(customHooks.fieldData)
            customHooks.submit(emtyValue)
            reInitSectionValue(emtyValue)
            toggleSubmit()
            saveErrors({})

        } else {
            saveErrors(errorMsg)

        }
    }

    return useMemo(() => (
        <>
            {customFields && (
                <div className="col-md-4 offset-md-5">
                    <div className="inputFields flexColumn">

                        {customFields.map((field, index) => (
                            <div class="form-group box" style={{ order: sortIndex[field.key] }}>
                                {/* <h4 >{field.title}</h4> */}
                                <label htmlFor="">{field.title}</label>

                                {customHooks.renderInputFields(field, "", index, props)}
                                {/* <div class="requirements">
                                    <span className="highlight">@Required</span>
                                    <div class="char_requirements">
                                        <span className="highlight">@Min 20</span>
                                        <span className="highlight">@Max 100</span>
                                        <span className="highlight">@200</span>
                                    </div>
                                </div> */}
                                <small id="emailHelp" class="form-text text-muted">
                                    {field.description}
                                </small>

                            </div>
                        ))}

                    </div>
                    <h2 className="btn-large" onClick={handleSubmit}>submit</h2>
                </div>
            )}
        </>


    ), [customFields, sortIndex, customHooks.fieldData, state.updateFieldList, props, state.errors])
}

export default DisplayInputFields;



window.hold = function hold(value, validations) {

    let errorMsg = {}
    let error = false

    const repeat = (result = value) => {
        for (const key in result) {
            if (result.hasOwnProperty(key)) {

                const isRequired = validations[key].required
                const min = validations[key].min

                const element = result[key];
                console.log(key)
                if (Object.prototype.toString.call(element) === "[object Object]") {
                    repeat(element)
                } else {
                    if (isRequired === true && !element) {
                        error = true
                        errorMsg[key] = "This Field is Required"
                    } else if (min && element.length < min) {
                        error = true
                        errorMsg[key] = "Minimum Length 5"
                    } else {
                        errorMsg[key] = ""
                    }
                }

            }
        }
    }

    repeat()

    return { error, errorMsg }

}