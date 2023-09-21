import React from "react";
import "../../App.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useFilterContext } from "../../Context/filterContext";

import { BsFillGridFill, BsList } from "react-icons/bs";


function Sort(){

    const { grid_view, setGridView, setListView,sorting } = useFilterContext();
 
    return(
        <>
         <div className="float-end d-flex">
        <button className={ grid_view ? "icon-active" : "icon"}
        onClick={setGridView}>
      
          <BsFillGridFill className="icon " />
        </button>

        <button className={ grid_view ? "icon" : "icon-active"}
        onClick={setListView}>
          <BsList className="icon "  />
        </button>

        <DropdownButton id="dropdown-basic-button sort" className="ms-1" variant="light" title="Filter" onSelect={sorting}>
      <Dropdown.Item  eventKey="lowest">Lowest</Dropdown.Item>
      <Dropdown.Item eventKey="highest">highest</Dropdown.Item>
      <Dropdown.Item  eventKey="a-z">A-Z</Dropdown.Item>
      <Dropdown.Item  eventKey="z-a">Z-A</Dropdown.Item>
    </DropdownButton>
      </div>
        </>
    )

}


export default Sort;