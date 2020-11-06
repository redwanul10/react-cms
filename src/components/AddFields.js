import React, { useContext, useState, useEffect } from 'react';
import { stateContext } from './StateProvider'
import AddFieldModal from './AddFieldModal';
import FieldList from './FieldList';

const AddFields = (props) => {

    const {
        state,
        activeModal,
        createContentType
    } = useContext(stateContext)

    useEffect(() => {
        props.onUpdate(state.contentTypes)
    }, [state.updateFieldList])

    const handleFieldListUpdate = fields => {
        const contentTypes = {
            ...state.contentTypes,
            fields,
        }
        props.onUpdate(contentTypes)
    }


    return (
        <>
            <AddFieldModal models={props.models} />
            <FieldList
                onUpdate={handleFieldListUpdate}
            />
            <button onClick={activeModal}>Add Field</button>
            <button onClick={e => props.onSubmit(state.contentTypes)}>get result</button>
        </>
    );
}

export default AddFields;