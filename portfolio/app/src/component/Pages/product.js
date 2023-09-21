import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import FeatureProduct from "./featureProduct"

function Product(){
    const { isLoading, featureProducts } = useProductContext();

    if (isLoading) {
      return <div> ......Loading </div>;
    
    }

    return(
        <>
    
  
        <div className="">
          {featureProducts.map((curElem) => {
            return <FeatureProduct key={curElem.id} {...curElem} />;
          })}
        </div>
  
 
        </>
    )
}

export default Product;