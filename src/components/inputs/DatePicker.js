import React, { useState, useEffect } from 'react'
import DateTimePicker from 'react-datepicker';
import ValidationStatus from '../ValidationStatus';

const DatePicker = (props) => {

    useEffect(() => {
        // setTimeout(() => props.saveData(props.name, ""), 100)
    }, [props.rerender])

    return (
        <div>
            <DateTimePicker
                className="form-control"
                onChange={data => {
                    props.saveData(props.name, data)
                }}
                // onChange={date => setDateValue(date)}
                placeholderText="Select Date"
                selected={props.value ? new Date(props.value) : ""}
            />

            <ValidationStatus
                error={props.errorMsg}
                {...props}
                disableMinMax
            />
            {/* {props.errorMsg && <strong style={{ color: "red" }}>{props.errorMsg}</strong>} */}
        </div>
    );
}


const checkProps = (prev, next) => {
    console.log(prev.value, next.value)

    if (prev.name !== next.name) {
        return false
    }

    if (prev.rerender !== next.rerender) {
        return false
    }

    if (prev.errorMsg !== next.errorMsg) {
        return false
    }

    return prev.value === next.value ? true : false
}

export default React.memo(DatePicker, checkProps)

