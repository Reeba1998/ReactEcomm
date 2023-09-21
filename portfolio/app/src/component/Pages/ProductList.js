import React from "react";
import GridView from "./GridView";
import ListView from "./ListVeiw";
import { useFilterContext } from "../../Context/filterContext";

function ProductList(){

    const { filter_products, grid_view } = useFilterContext();

    if (grid_view === true) {
      return <GridView product={filter_products} />;
    }
  
    if (grid_view === false) {
      return <ListView product={filter_products} />;
    }
}

export default ProductList;