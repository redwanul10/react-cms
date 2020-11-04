import React, { useContext, useState, useEffect } from 'react';
import { stateContext } from './StateProvider'
import { FilterContainer, FilterItem } from './Filter';
import arrayMove from 'array-move';

const SortNestedField = () => {
    const {
        state,
        dispatch
    } = useContext(stateContext)

    const [parentField, setParentField] = useState([])

    useEffect(() => {
        const nestedFields = state.selectedField ? state.selectedField.field.fields : []
        setParentField([...nestedFields])
    }, [])

    const onSortEndHandler = ({ oldIndex, newIndex }) => {

        const sortedList = arrayMove(parentField, oldIndex, newIndex)
        setParentField(sortedList)

        // props.onUpdate(sortedList)
        // dispatch({
        //     type: "Field_Sorted",
        //     payload: {
        //         fields: sortedList,
        //         contentTypeId: 1
        //     }
        // })
        // setTimeout(() => {
        //     dispatch({
        //         type: "DISABLE_LIST_UPDATE",
        //     })
        // }, 1000)
    };


    const onSortStart = (node, event) => {
        event.preventDefault()
        dispatch({
            type: "ENABLE_LIST_UPDATE",
        })
    }

    const handleSubmit = () => {
        dispatch({
            type: "Field_Sorted",
            payload: {
                fields: parentField,
                parentFieldId: state.selectedField.field.fieldId
            }
        })
    }

    return (
        <>
            <div style={{ width: "500px" }}>
                <h2 className="text-center" style={{ marginBottom: "50px" }}>Sort Child Field</h2>
                <FilterContainer onSortStart={onSortStart} onSortEnd={onSortEndHandler} useDragHandle>
                    {parentField.map((value, index) => (
                        <FilterItem
                            key={`item-${index}`}
                            index={index}
                            value={value}
                            contentTypeId={1}
                        />
                    ))}
                </FilterContainer>
            </div>
            <a href="#" style={{ marginTop: "30px" }} onClick={handleSubmit} className="btn btn-primary">Done</a>
        </>
    );
}

export default SortNestedField;