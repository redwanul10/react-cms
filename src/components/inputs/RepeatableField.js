import React, { useState, useEffect, useContext } from 'react';
import useFields from '../../custom-hooks/useRenderFields'
import useFieldValidation from '../../custom-hooks/useFieldValidation'
import uid from 'uid'
import { stateContext } from '../StateProvider'
// import useRepeatableValidation from '../../custom-hooks/useRepeatableValidation';
import getEmtyValue from '../../utill/getEmtyValue'

const RepeatableField = (props) => {

    // const {
    //     validations,
    //     extractValidation,
    //     validateValues,
    // } = useRepeatableValidation(props.fieldData.fields || [])
    // const [fieldData, setFieldData] = useState({})

    const [emtyData, setEmtyData] = useState({})
    const { saveErrors } = useContext(stateContext)
    const { extractValidation, validateValues } = useFieldValidation()

    const custom = useFields(props.RichTextEditor, props.isActiveTextEditor, props.toggleInput)



    useEffect(() => {

        extractValidation(props.fieldData.fields)
        const emtyValue = getEmtyValue(props.fieldData.fields)
        setEmtyData(emtyValue)
        custom.setInitialValue(emtyValue)

    }, [props.jsonFieldData])
    // [props]

    // useEffect(() => {

    //     // custom.submit(emtyData)
    // }, [props.rerender])



    const submit = e => {
        const { error, errorMsg } = validateValues(custom.fieldData)

        if (!error) {
            props.onRepeate({ ...custom.fieldData, id: uid(15) }, props.fieldData.key)
            custom.submit(emtyData)
            saveErrors({})
        } else {
            saveErrors(errorMsg)
        }
    }

    const handleUpdateItem = e => {

        const { error, errorMsg } = validateValues(custom.fieldData)

        if (!error) {
            props.updateRepeatableItem(props.fieldData.key, custom.fieldData)
            custom.submit(emtyData)
            saveErrors({})
        } else {
            saveErrors(errorMsg)
        }

        // props.updateRepeatableItem(props.fieldData.key, custom.fieldData)
        // custom.reset(emtyData)
    }

    const handleDeleteItem = () => {
        props.deleteRepeatableItem(custom.fieldData.id, props.fieldData.key)
        custom.reset(emtyData)
    }


    return (
        <div className="Repetable-Fields">
            {props.fieldData.fields.map((field, index) => (
                <div class="form-group">
                    <label >{field.title}</label>

                    {custom.renderInputFields(field, true, "", props.fieldOptions)}

                    <small id="emailHelp" class="form-text text-muted">
                        {field.description}
                    </small>

                </div>
            ))}


            {!custom.displayUpdateBtn
                ? <h2 onClick={submit} className="btn-large">add</h2>

                : (
                    <div>
                        <h2 className="btn-large delete" onClick={handleUpdateItem}>update</h2>

                        <h1 className="btn-large" onClick={e => custom.reset(emtyData)}>cancel</h1>

                        <h1 className="btn-large" onClick={handleDeleteItem}>delete</h1>
                    </div>
                )
            }



            {props.values.map(value => (
                <div className="box" onClick={() => custom.editRepeatableItem(value)}>
                    <h5>ITEM</h5>
                </div>
            ))}

        </div>
    );
}

export default RepeatableField;