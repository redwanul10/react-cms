import React, { useEffect } from 'react';
import ValidationStatus from '../ValidationStatus';

const TextInput = (props) => {

    const activeInput = () => {
        props.toggleInput && props.toggleInput()
    }

    useEffect(() => {
        // setTimeout(() => props.saveData(props.name, ""), 100)
    }, [props.rerender])

    return (
        <>
            <input type="text"
                onFocus={activeInput}
                onBlur={activeInput}
                onChange={e => props.onChange(e)}
                class="form-control"
                name={props.name}
                value={props.value}
            />
            <ValidationStatus
                error={props.errorMsg}
                charLen={props.value.length}
                {...props}
            />
            {/* {props.errorMsg && <strong style={{ color: "red" }}>{props.errorMsg}</strong>} */}

        </>
    );
}

// export default TextInput;

const checkProps = (prev, next) => {
    // console.log(prev.value, next.value)
    // if (prev.restart !== next.restart) {
    //     return false
    // }

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

// export default React.memo(TextInput, checkProps)
export default TextInput