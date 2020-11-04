import React,{useContext} from 'react';
import {stateContext} from './StateProvider'

const useContentType = ()=>{
    const {state} = useContext(stateContext)
    return{
        data: state.contentTypes.map(type => type.name)
    }
}

export const customNavHoc = (ChildComponent) => ()=> {
    return(
        <stateContext.Consumer>
            { value =>(
                <ChildComponent 
                title="this is from HOC"
                data={value}
                />
            )}
        </stateContext.Consumer>
    )
}

export default useContentType
 
// const higherOrderComponent = (WrappedComponent) => {
//     class HOC extends React.Component {
        
//       render() {
        
//         return( 
//             <WrappedComponent
//             state={[]}
//             title="this is from hoc"
//             />
//         )
//       }
//     }
      
//     return HOC;
//   };


// export default higherOrderComponent;
 
// export default CustomNavbar;
// CustomNavbar