import React,{useContext,useState} from 'react';
import {stateContext} from './StateProvider'
import uid from 'uid';
import AddFieldModal from './AddFieldModal';

const CreatContentType = () => {
    const {
        activeModal,
        createContentType
    } = useContext(stateContext)

    const [contentTypeName,setContentTypeName] = useState("")
    const [type,setType] = useState("repleatable")
    
    const submitHandelar = (e)=>{
        e.preventDefault()
        
        createContentType({
            name:contentTypeName,
            type,
            id: uid(20),
            fields:[]
        })
        setContentTypeName("")
    }

    
    return ( 
        <>
            <div className="createContentType">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div class="form-group">
                                <label for="exampleInputPassword1">Content Type Name</label>
                                <input onChange={e=> setContentTypeName(e.target.value)} type="text" class="form-control" value={contentTypeName} placeholder="Enter Name"/>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" onChange={e=>setType(e.target.value)} name="content-type" id="exampleRadios1" value="repleatable" defaultChecked/>
                                <label class="form-check-label" for="exampleRadios1">Repeatable</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" onChange={e=>setType(e.target.value)} name="content-type" id="exampleRadios2" value="single" />
                                <label class="form-check-label" for="exampleRadios2">Single</label>
                            </div>
                            <a href="#" className="btn btn-primary"onClick={e=>submitHandelar(e)}>Submit</a>
                        </div>
                    </div>
                </div>
            </div>

            <AddFieldModal/>
            <button onClick={activeModal}>Add Field</button>
        </>
    );
}
 
export default CreatContentType;