import React,{useContext} from 'react';
import {stateContext} from './StateProvider'
import FieldList from './FieldList';
import CustomNavbar,{customNavHoc} from './CustomNavbar';

const Navbar = (props) => {
    const {state} = useContext(stateContext)
    const {data} = CustomNavbar()
    console.log(props)
    return ( 
        <div className="navbar">
        
            <div class="col-3">
                <div class="list-group" id="list-tab" role="tablist">
                    {state.contentTypes.map(contentType=>(
                        <a class="list-group-item list-group-item-action" id="list-home-list"href="#list-home" >
                            {contentType.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default customNavHoc(Navbar);
// export default CustomNavbar(Navbar);