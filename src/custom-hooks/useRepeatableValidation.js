import React, { useContext, useState, useMemo, useReducer, useCallback, useEffect } from 'react';
import { stateContext } from '../components/StateProvider'


const useRepeatableValidation = () => {
    const [validations, setValidation,] = useState({})
    // const [error, setError,] = useState(false)

    // useEffect(() => {
    //     extractValidation()
    // }, [])

    const extractValidation = (fields) => {
        const validation = {}

        fields.forEach(item => {
            validation[item.key] = {
                required: item.required,
                min: item.min || null,
                max: item.max || null
            }
        })

        setValidation(validation)
    }

    const validateValues = (fieldValues) => {
        let error = false
        for (const key in fieldValues) {
            if (fieldValues.hasOwnProperty(key) && validations.hasOwnProperty(key)) {
                const value = fieldValues[key];
                const isRequired = validations[key].required

                // alert(JSON.stringify({
                //     value,
                //     isRequired
                // }))
                if (isRequired === true && !value) {
                    error = true
                    break;
                } else {
                    error = false
                }

            } else {
                // error = true
            }
        }
        console.log(fieldValues)
        window.error = error
        return error
    }

    return { validations, extractValidation, validateValues }
}

export default useRepeatableValidation;






