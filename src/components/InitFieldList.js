import React, { useContext } from 'react';
import { stateContext } from './StateProvider'

const images = [
    "/images/text.png",
    "/images/numbers.png",
    "/images/font.png",
    "/images/gallery.png",
    "/images/text-editor.png",
    "/images/repeatable.png",
    "/images/color-picker.png",
    "/images/relational.png",
    "/images/section.png",
    "/images/calendar.png",
    "/images/boolean.png",
    "/images/select.png"
]

const InitFieldList = () => {
    const {
        state,
        selectField,
    } = useContext(stateContext)

    return (
        <div className="row">
            {
                state.fields.map((field, i) => (
                    <div className={`col-md-3 ${field.type === "Section" && "Repeatable" === state.groupFieldType ? "d-none" : ""}`}>

                        <div className="field" onClick={e => selectField(field)} >
                            <img src={images[i]} alt="" style={{ width: "50px", height: "50px" }} />
                            <div className="field_name">{field.type}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default InitFieldList;