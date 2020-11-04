import React,{useEffect} from 'react';
import {connect} from 'react-redux'

// class ReactTest extends Component {
//     state = {  }
//     insertTodo = (event)=>{
//         event.preventDefault()
//         this.props.createTodo()
//     }
//     render() { 
//         console.log(this.props.Todos)

//     }
// }
const toggleModal = event => dispatch =>{
        
    console.log('TOGGLE MODAL CALLED')
    dispatch({type:"TOGGLE_MODAL"})
}

const FetchDAta = ()=> dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(res=> {
        console.log(res)
        dispatch({
            type:"FETCHED",
            payload:res
        })
    })
}

const ReactTest = (props)=>{

    useEffect(()=>props.FetchDAta(),[])
    const insertTodo = (event)=>{
        event.preventDefault()
        props.createTodo()
    }
    
    
    console.log(props.Modal)
    console.log(props.api)
    return (
        <> 
            <div>React redux test</div>
            <a onClick={e=>insertTodo(e)} href="">INSERT_TODO</a>
            {/* {props.Todos.map(item=><div>{item.title}</div>)} */}
            <button onClick={props.toggleModal}>active Modal</button>
            {props.Modal ? "MODAL_ACTIVE":"MODAL_CLOSE"}
            <div onClick={props.FetchDAta}>FETCH_DATA</div>
            {props.api.map(item=><div>{item.name}</div>)}
        </>
     );
}

const mapStateToProps = (state)=>{
    return {
        Todos:state.todos.todoList,
        Modal:state.modal,
        api:state.api
    }
}

const mapDisPatchToProps = (dispatch)=>{
    return {
        toggleModal,
        createTodo:()=>dispatch(
        {type:"CREATE_TODO",
        payload:{
            title:`Todo from REDUX TEXT`,
            id:"REDUX_TEST"
        }})
    }
}

 
export default connect(mapStateToProps,{toggleModal,FetchDAta})(ReactTest);