import React, { useContext, useState, useEffect } from 'react';
import { stateContext } from './StateProvider'
import AddFieldModal from './AddFieldModal';
import FieldList from './FieldList';
import SortNestedField from './SortNestedField';
import FieldForm from './FieldForm';
import Modal from 'react-responsive-modal';

const AddFields = (props) => {

    const {
        state,
        activeModal,
        closeEditModal,
        closeSortModal,
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
            {/* EDIT MODAL */}
            <Modal open={state.editModal} focusTrapped={false} onClose={closeEditModal} center>
                <h2 className="modal_title">Edit Field</h2>
                <FieldForm models={props.models} Edit contentTypeId={1} />
            </Modal>

            {/* SORT MODAL */}
            <Modal
                classNames={{ overlay: "sort_modal" }}
                open={state.sortModal}
                focusTrapped={false}
                onClose={closeSortModal}
                center
            >
                <SortNestedField />
            </Modal>

            <button onClick={activeModal}>Add Field</button>
            <button onClick={e => props.onSubmit(state.contentTypes)}>get result</button>
        </>
    );
}

export default AddFields;