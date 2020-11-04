const getFieldsLength = (Fields) => {


    let totalLength = 0

    const extractValidation = (fields) => {

        fields.forEach(item => {
            if (item.type === "Repeatable" || item.type === "Section") {
                totalLength += 1
                extractValidation(item.fields)
            } else {
                totalLength += 1
            }
        })
    }

    extractValidation(Fields)

    return totalLength
}

export default getFieldsLength
