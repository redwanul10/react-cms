import React, { useState } from 'react';


const useFieldValidation = () => {
    const [validations, setValidation,] = useState({})

    // const validation = {}
    const extractValidation = (fields) => {
        const validation = {}
        const recursion = (arr = fields) => {
            arr.forEach(item => {
                if (item.type !== "Repeatable") {
                    validation[item.key] = {
                        required: item.required,
                        min: item.minChar|| 0,
                        max: item.maxChar|| 0
                    }
                } if (item.type !== "Repeatable" && item.fields) {
                    recursion(item.fields)
                }
            })
        }

        recursion()

        console.log(validation)

        setValidation(validation)
    }

    const validateValues = (fieldValues) => {

        // let errorMsg = {}
        // let error = false

        console.log(fieldValues)
        console.log(validations)

        let errorMsg = {}
        let error = false

        const recursion = (values = fieldValues) => {
            console.log(values)
            for (const key in values) {
                // for (const key in validations) {
                // alert(key)
                console.log(key)
                // if (!fieldValues[key]) {
                //     alert("error")
                // }

                const value = values[key];
                const isRequired = validations[key] ? validations[key].required : false
                const min = validations[key] ? validations[key].min: 0
                const max = validations[key] ? validations[key].max: 0

                if (validations.hasOwnProperty(key)) {

                    console.log(key)




                    // const isRequired = validations[key].required

                    if (Object.prototype.toString.call(value) === "[object Object]") {
                        console.log("yes this is object")
                        // const isError = recursion(value)
                        recursion(value)
                        // error = isError.error ? isError.error : error
                        // const mergeErrorMsg = { ...errorMsg, ...isError.errorMsg }
                        // errorMsg = mergeErrorMsg
                    } else {
                        console.log(key, value)

                        if (isRequired === true && !value) {
                            error = true
                            errorMsg[key] = "Required"
                        } else if (min && value.length < min) {
                            error = true
                            errorMsg[key] = "Min"
                        } else if (max && value.length > max) {
                            error = true
                            errorMsg[key] = "Max"
                        } else {
                            errorMsg[key] = ""
                        }
                    }
                } else {

                    const valid = validations[key] || {}

                    if (valid.required) {
                        // alert("required field")
                        error = true
                        errorMsg[key] = "Required"
                    }
                }
            }

        }
        recursion()
        console.log({ error, errorMsg })
        return { error, errorMsg }
    }

    return { validations, extractValidation, validateValues }
}

export default useFieldValidation;






