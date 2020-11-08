// import React, { useContext } from 'react';
// import { stateContext } from './StateProvider'
// import arrayMove from 'array-move';
// import { FilterContainer, FilterItem } from './Filter';
// import Modal from 'react-responsive-modal';
// import FieldForm from './FieldForm';

// const FieldList = () => {
//   const {
//     state,
//     dispatch,
//     closeEditModal
//   } = useContext(stateContext)

//   const onSortEndHandler = ({ oldIndex, newIndex }) => {
//     const sortedList = arrayMove(state.contentTypes[0].fields, oldIndex, newIndex)
//     console.log(sortedList)
//     dispatch({
//       type: "Field_Sorted",
//       payload: {
//         fields: sortedList,
//         contentTypeId: 1
//       }
//     })
//     setTimeout(() => {
//       dispatch({
//         type: "CLOSE_TEXTEDITOR_RENDER",
//       })
//     }, 1000)
//   };
//   console.log(state)

//   const onSortStart = (node, event) => event.preventDefault()
//   return (
//     <>
//       <div class="col-md-3 offset-md-1">
//         <FilterContainer onSortStart={onSortStart} onSortEnd={onSortEndHandler} useDragHandle>
//           {state.contentTypes[0].fields.map((value, index) => (
//             <FilterItem
//               key={`item-${index}`}
//               index={index}
//               value={value}
//               contentTypeId={1}
//             />
//           ))}
//         </FilterContainer>
//       </div>

//       <Modal open={state.editModal} onClose={closeEditModal} center>
//         <FieldForm Edit contentTypeId={1} />
//       </Modal>
//     </>
//   );
// }

// export default FieldList;


import React, { useContext, useEffect, useState, useMemo } from 'react';
import { stateContext } from './StateProvider'
import arrayMove from 'array-move';
import { FilterContainer, FilterItem } from './Filter';
import Modal from 'react-responsive-modal';
import FieldForm from './FieldForm';
import SortNestedField from './SortNestedField';

const FieldList = (props) => {
  const {
    state,
    dispatch,
    closeEditModal,
    closeSortModal
  } = useContext(stateContext)

  // const [fields, setFields] = useState([])

  // useEffect(() => {
  //   setFields([...state.contentTypes[0].fields])
  // }, [state.contentTypes[0].fields.length])

  const onSortEndHandler = ({ oldIndex, newIndex }) => {

    const sortedList = arrayMove(state.contentTypes.fields, oldIndex, newIndex)

    props.onUpdate(sortedList)
    dispatch({
      type: "Field_Sorted",
      payload: {
        fields: sortedList,
        contentTypeId: 1
      }
    })
    setTimeout(() => {
      dispatch({
        type: "DISABLE_LIST_UPDATE",
      })
    }, 1000)
  };


  const onSortStart = (node, event) => {
    event.preventDefault()
    dispatch({
      type: "ENABLE_LIST_UPDATE",
    })
  }

  return (
    <>
      <div class="col-md-3 offset-md-1">
        <FilterContainer onSortStart={onSortStart} onSortEnd={onSortEndHandler} useDragHandle>
          {state.contentTypes.fields.map((value, index) => (
            <FilterItem
              key={`item-${index}`}
              index={index}
              value={value}
              contentTypeId={1}
            />
          ))}
        </FilterContainer>
      </div>

      {/* EDIT MODAL */}
      <Modal open={state.editModal} focusTrapped={false} onClose={closeEditModal} center>
      <h2 className="modal_title">Edit Field</h2>
        <FieldForm Edit contentTypeId={1} />
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
    </>
  );
}

export default FieldList;