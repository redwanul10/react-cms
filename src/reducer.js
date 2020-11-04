
const reducer = (state, action) => {
    switch (action.type) {

        case "TOGGLE_SUBMIT":
            return {
                ...state,
                submited: !state.submited
            }

        // ***** MODAL ******
        case "ACTIVE_MODAL":
            return {
                ...state,
                modal: true,
            }
        case "CLOSE_MODAL":
            return {
                ...state,
                modal: false,
                groupFieldId: null,
                selectedField: null,
                groupFieldType: null
            }

        case "Active_EDIT_MODAL":
            return {
                ...state,
                editModal: true,
                selectedField: action.payload
            }
        case "CLOSE_EDIT_MODAL":
            return {
                ...state,
                editModal: false,
                selectedField: null
            }

        case "ACTIVE_SORT_MODAL":
            return {
                ...state,
                sortModal: true,
                selectedField: action.payload
            }

        case "CLOSE_SORT_MODAL":
            return {
                ...state,
                sortModal: false,
                selectedField: null
            }

        case "SAVE_ERRORS":
            return {
                ...state,
                errors: { ...action.payload.errors }
            }

        // ***** Field ******** 
        case "SELECT_FIELD":
            return {
                ...state,
                editField: true,
                selectedField: action.payload
            }
        case "SET_GROUP_FIELD":
            return {
                ...state,
                groupFieldId: action.payload.fieldId,
                groupFieldType: action.payload.type
            }
        case "ADD_FIELD":
            const { contentTypes, selectedField } = state
            const field = { ...selectedField, ...action.payload.fieldData }

            // const ct_index = contentTypes.findIndex(contentType => {
            //     return contentType.id === action.payload.contentTypeId
            // })


            if ((field.type === "Repeatable") || (field.type === "Section")) {
                field.fields = []
            }

            if (state.groupFieldId) {

                const addfieldNested = (FIELDS = []) => {
                    for (let index = 0; index < FIELDS.length; index++) {

                        const item = FIELDS[index];
                        if (item.fieldId === state.groupFieldId) {
                            item.fields.push(field)
                            break
                        } else {
                            addfieldNested(item.fields)
                        }
                    }

                }

                addfieldNested(contentTypes.fields)

            } else {

                contentTypes.fields.push(field)
            }


            // contentTypes.map(contentType =>{ 
            //     if(contentType.id === action.payload.contentTypeId) {
            //         contentType.fields.push(field)
            //     }
            // })
            return {
                ...state,
                contentTypes: { ...contentTypes },
                modal: false,
                selectedField: null,
                groupFieldType: null,
                groupFieldId: null,
                updateFieldList: !state.updateFieldList
            }

        case "DELETE_FIELD":

            if (action.payload.groupFieldId) {
                console.log(action.payload)

                const newState = state

                const deletefieldNested = (FIELDS = []) => {
                    for (let index = 0; index < FIELDS.length; index++) {

                        const item = FIELDS[index];
                        if (item.fieldId === action.payload.groupFieldId) {
                            item.fields = item.fields.filter(field => field.fieldId !== action.payload.fieldId)
                            break
                        } else {
                            deletefieldNested(item.fields)
                        }
                    }

                }

                deletefieldNested(newState.contentTypes.fields)


                return {
                    ...newState,
                    deletedField: { ...action.payload },
                    updateFieldList: !state.updateFieldList
                }

            }

            // state.contentTypes.map(contentType => {
            //     if (contentType.id === action.payload.contentTypeId) {
            //         const filterFields = contentType.fields.filter(field => {
            //             return field.fieldId !== action.payload.fieldId
            //         })
            //         contentType.fields = filterFields
            //     }
            // })

            state.contentTypes.fields = state.contentTypes.fields.filter(field => {
                return field.fieldId !== action.payload.fieldId
            })

            return {
                ...state,
                deletedField: { ...action.payload },
                updateFieldList: !state.updateFieldList
            }

        case "UPDATE_FIELD":

            const newState = state

            const updatefieldNested = (FIELDS = []) => {
                for (let index = 0; index < FIELDS.length; index++) {

                    const item = FIELDS[index];
                    if (item.fieldId === action.payload.fieldData.fieldId) {
                        FIELDS[index] = action.payload.fieldData
                        break
                    } else {
                        updatefieldNested(item.fields)
                    }
                }

            }

            updatefieldNested(newState.contentTypes.fields)


            return {
                ...state,
                updateFieldList: !state.updateFieldList,
                fieldDataUpdated: true
            }
        case "Disable_FieldData_Update":
            return {
                ...state,
                fieldDataUpdated: false
            }

        case "Field_Sorted":
            const { parentFieldId } = action.payload
            const newstate = state

            if (parentFieldId) {
                // alert("nested sort")

                const sortNestedField = (FIELDS = []) => {
                    for (let index = 0; index < FIELDS.length; index++) {

                        const item = FIELDS[index];
                        if (item.fieldId === action.payload.parentFieldId) {
                            item.fields = [...action.payload.fields]
                            break
                        } else {
                            sortNestedField(item.fields)
                        }
                    }

                }

                sortNestedField(newstate.contentTypes.fields)

                return {
                    ...state,
                    sortModal: false,
                    selectedField: null
                }
            }

            state.contentTypes.fields = action.payload.fields

            return {
                ...state,
                renderTextEditor: !state.renderTextEditor,
                // updateFieldList: !state.updateFieldList
            }

        case "CLOSE_TEXTEDITOR_RENDER":
            return {
                ...state,
                renderTextEditor: false
            }
        case "TOGGLE_EDITOR":
            return {
                ...state,
                isActiveTextEditor: !state.isActiveTextEditor
            }
        case "RE_INIT_SECTION_VALUE":

            return {
                ...state,
                reInitSectionValue: !state.reInitSectionValue,
                rootValue: { ...action.payload }
            }

        case "ENABLE_LIST_UPDATE":
            return {
                ...state,
                enableListUpdate: true
            }
        case "DISABLE_LIST_UPDATE":
            return {
                ...state,
                enableListUpdate: false
            }

        // ***** Content Type *******
        case "CREATE_CONTENT_TYPE":
            return {
                ...state,
                contentTypes: [...state.contentTypes, action.payload]
            }

        default:
            return state
    }
}

export default reducer