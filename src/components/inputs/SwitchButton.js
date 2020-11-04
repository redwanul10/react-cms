import React, { useState, useEffect } from 'react'
import DateTimePicker from 'react-datepicker';
import Switch from "react-switch";

const SwitchButton = (props) => {

    useEffect(() => {
        setTimeout(() => props.saveData(props.name, ""), 100)
    }, [props.rerender])

    return (
        <div>
            <Switch
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={30}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={48}
                onChange={data => {
                    props.saveData(props.name, data)
                }}
                checked={props.value} />

            {props.errorMsg && <strong style={{ color: "red" }}>{props.errorMsg}</strong>}
        </div>
    );
}


const checkProps = (prev, next) => {
    console.log(prev.value, next.value)

    if (prev.rerender !== next.rerender) {
        return false
    }

    if (prev.errorMsg !== next.errorMsg) {
        return false
    }

    return prev.value === next.value ? true : false
}

export default React.memo(SwitchButton, checkProps)

