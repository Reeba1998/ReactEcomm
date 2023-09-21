import React from "react";
import { NavLink } from "react-router-dom";
import '../../App.css';

const FeatureProducts = (curElem) => {
  // const { id, name, image, price, category } = curElem;
  const { id, title, thumbnail } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`} className="navlink-no-underline">
      <div className=" m-1">
        
          <img src={thumbnail} alt={title} style={{width:"300px" , height:"500px"}}/>
          <div className="d-flex mt-2" >
            <p className=" text-dark fw-bold">{title}</p>
            {/* <p className="text-dark text-end fw-bold">PKR:{price}</p> */}

          </div>
        
        

    
      </div>
    </NavLink>
  );
};

export default FeatureProducts;