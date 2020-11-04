import React, { useState, useEffect } from 'react'

const LongText = (props) => {

    useEffect(() => {
        setTimeout(() => props.saveData(props.name, ""), 100)
    }, [props.rerender])

    return (
        <div>
            <textarea cols="15" rows="5"
                onChange={props.onChange}
                class="form-control"
                name={props.name}
                value={props.value}
            >
            </textarea>

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

export default React.memo(LongText, checkProps)

