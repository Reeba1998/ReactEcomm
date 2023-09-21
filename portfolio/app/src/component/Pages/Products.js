
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useFilterContext } from "../../Context/filterContext";
import ProductList from "./ProductList";
import Sort from "./Sort";

const Products = () => {

    // const { filter_products}=useFilterContext();
   
    return (

        <Container className="" style={{marginTop:"120px"}}>
            <Row className="">
                <Col></Col>
                <Col></Col>
                <Col></Col>
               
               
                
               
               
                
                
                
              
                <Col xs={11} lg={6}>
                <Sort />
                </Col>
            </Row>

            <Row className="">
                <Col>
                <ProductList/>
                </Col>
            </Row>

        </Container>
      
        // <div className="container grid grid-filter-column">
        //   <div>
        //     <FilterSection />
        //   </div>
  
        //   <section className="product-view--sort">
        //     <div className="sort-filter">
        //       <Sort />
        //     </div>
        //     <div className="main-product">
        //       <ProductList />
        //     </div>
        //   </section>
        // </div>
      
    );
  };

  export default Products;
  