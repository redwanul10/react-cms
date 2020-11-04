import React, { useEffect } from 'react';

const Switch = (props) => {



    useEffect(() => {
        // setTimeout(() => props.saveData(props.name, ""), 100)
    }, [props.rerender])

    return (
        <>

            {/* checked={props.value} */}
            <div class="toggleWrapper">
                <input
                    name={props.name}
                    type="checkbox"
                    id="dn"
                    class="dn"
                    checked={props.value}
                />
                <label class="toggle" onClick={e => props.saveData(props.name, !props.value)}><span class="toggle__handler"></span></label>
            </div>
            {props.errorMsg && <strong style={{ color: "red" }}>{props.errorMsg}</strong>}

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
export default Switch