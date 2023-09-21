import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";

const PageNavigation = ({ title }) => {

    
  return (
   <> 
   <div className="ps-5 fs-3" style={{marginTop:"100px"}}>
      <NavLink to="/products" className="navlink-no-underline text-secondary">Product</NavLink>/{title}

      </div>
      </>
   
  );
};

export default PageNavigation;