import React, { useEffect, useState } from 'react';
import Select from 'react-select'

const SelectField = (props) => {

  const [option, setOptions] = useState()

  useEffect(() => {
    props.getRelationalData(props.selectedModel, setOptions)
  }, [])


  return (
    <>
      <Select

        options={option}
        isMulti={props.relationType.value === "oneToMany"}
        value={props.selected}
        onInputChange={e => console.log("typing")}
        onChange={selected => props.saveData(props.name, selected)}
      />
      {/* <select
                class="form-control"
                name={props.name}
                id=""
                onChange={e => props.onChange(e)}
            >
                {props.options && props.options.split("\n").map(item => (
                    <option value={item}>{item}</option>
                ))}
            </select> */}
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
export default SelectField