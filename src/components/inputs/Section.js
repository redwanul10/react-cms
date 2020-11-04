import React, { useState, useEffect, useMemo, useContext } from 'react';
import useFields from '../../custom-hooks/useRenderFields'
import { stateContext } from '../StateProvider'
import getFieldsLength from '../..//utill/getFieldsLength'
import getEmtyValue from '../..//utill/getEmtyValue'


const Section = (props) => {

    const parent = {
        updateParentValue: props.saveData,
        key: props.fieldData.key
    }

    const { state } = useContext(stateContext)
    const custom = useFields(props.RichTextEditor, props.isActiveTextEditor, props.toggleInput, parent)
    const [loaded, setLoaded] = useState(false)
    const [isSubmited, setIsSubmited] = useState(false)
    const [isNewValue, setIsNewValue] = useState(false)



    useEffect(() => {
        // setFieldData({})
        // if (loaded) {
        //     console.log(custom.fieldData)
        //     props.saveData(props.fieldData.key, custom.fieldData)
        // } else {
        //     setLoaded(true)
        // }

        // if ((isNewValue === props.isNewValue) || (isSubmited === props.rerender)) {
        props.saveData(props.fieldData.key, custom.fieldData)
        // }

        // setTimeout(() => props.saveData(props.fieldData.key, custom.fieldData), 3000)

        // custom.setValue(props.values || {})
    }, [custom.fieldData])

    const fieldNestedValue = () => {

        let result = {}

        const recursion = (data) => {
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    if (Object.prototype.toString.call(element) === "[object Object]") {
                        if (key === props.fieldData.key) {
                            result = element
                            break
                        } else {
                            recursion(element)
                        }
                    }

                }
            }
        }

        recursion(state.rootValue)

        return result
    }
    useEffect(() => {
        const value = fieldNestedValue()
        custom.setInitialValue(value)
    }, [props.isNewValue, props.rerender])

    useEffect(() => {



        // if (isNewValue !== props.isNewValue) {
        //     custom.setInitialValue(props.values)
        //     setIsNewValue(props.isNewValue)
        //     return
        // }

        // alert(props.jsonvalues)

        // if (isSubmited !== props.rerender) {

        //     const emtyValue = getEmtyValue(props.fieldData.fields)
        //     custom.setInitialValue(emtyValue)
        //     setIsSubmited(props.rerender)
        //     return
        // }



        // setIsNewValue(props.isNewValue)

    }, [props.rerender, props.jsonvalues])

    // useEffect(() => {
    //     // setFieldData({})
    //     // custom.submit()
    //     custom.setValue(props.values)
    // }, [props.rerender])




    // return useMemo(() => (
    return (
        <div className="Repetable-Fields">
            {props.fieldData.fields.map((field, index) => (
                <div class="form-group">
                    <label >{field.title}</label>

                    {custom.renderInputFields(field, false, "", props.fieldOptions, true)}

                    <small id="emailHelp" class="form-text text-muted">
                        {field.description}
                    </small>

                </div>
            ))}
        </div>

    )
    // , [custom.fieldData, props.rerender, state.updateFieldList, props, state.errors]);
}

export default Section;