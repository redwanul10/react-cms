import React, { useContext } from "react";
import { stateContext } from "./StateProvider";
import FieldList from "./FieldList";
import CustomNavbar, { customNavHoc } from "./CustomNavbar";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();
  const { state, selectContentType } = useContext(stateContext);
  //   const { data } = CustomNavbar();
  console.log(props);

  const handleClick = (index) => {
    selectContentType(index);
    props.setCurrentIndex(index);
    if (props.onClick) {
      props.onClick(navigate, state.contentTypes[index].name);
      return;
    }
    navigate("/model/" + state.contentTypes[index].name);
  };
  return (
    <div className="navbar">
      <div class="col-3">
        <div class="list-group" id="list-tab" role="tablist">
          {props.navbar && (
            <span
              onClick={(e) => navigate("/model/create")}
              // class="list-group-item list-group-item-action"
              id="list-home-list"
              href="#list-home"
            >
              Create
            </span>
          )}
          {state.contentTypes.map((contentType, i) => (
            <span
              onClick={(e) => handleClick(i)}
              // class="list-group-item list-group-item-action"
              id="list-home-list"
              href="#list-home"
            >
              {contentType.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// export default customNavHoc(Navbar);
// export default CustomNavbar(Navbar);
