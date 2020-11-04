import React from 'react';

const ValidationStatus = props => {

    const {
        error,
        charLen,
        disableMinMax,
        isRequired,
        minChar,
        maxChar
    } = props

    const requiredCls = error === "Required" ? "error" : ""
    const minErrCls = error === "Min" ? "error" : ""
    const maxErrCls = error === "Max" ? "error" : ""

    return (
        <div class="requirements">
            <span className={`highlight ${requiredCls}`}>{isRequired ? "@Required" : ""}</span>
            {!disableMinMax && (
                <div class="char_requirements">
                    <span className={`highlight ${minErrCls}`}>{minChar ? `@Min ${minChar}` : ""}</span>
                    <span className={`highlight ${maxErrCls}`}>{maxChar ? `@Max ${maxChar}` : ""}</span>
                    <span className="highlight">{charLen}</span>
                </div>
            )}
        </div>
    );
}

export default ValidationStatus;