
const getEmtyValue = (Fields) => {


    const initial = {}

    const extractValidation = (fields, value) => {

        const obj = value || initial

        fields.forEach(item => {
            if (item.type === "Repeatable" || item.type === "Section") {

                if (item.type === "Repeatable") {
                    obj[item.key] = []
                    return
                }

                obj[item.key] = {}
                extractValidation(item.fields, obj[item.key])
            } else {
                obj[item.key] = ""
            }
        })
    }

    extractValidation(Fields)

    return initial
}

export default getEmtyValue