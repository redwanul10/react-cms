import React, { useContext, useState } from 'react';
import { stateContext } from './StateProvider'
import Modal from 'react-responsive-modal';
import FieldForm from './FieldForm';
import InitFieldList from './InitFieldList'

const AddFieldModal = () => {
    const {
        state,
        closeModal,
    } = useContext(stateContext)

    return (
        <>
            <Modal open={state.modal} onClose={closeModal} center>
                <h2 className="modal_title">Select Field</h2>

                {
                    state.selectedField ? (
                        state.selectedField.type === "Reational" ?
                            <FieldForm /> : <FieldForm />
                    ) : <InitFieldList />
                }

            </Modal>
        </>
    );
}

export default AddFieldModal;