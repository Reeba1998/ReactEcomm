import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureProducts from "./featureProduct";

const GridView = ({ product }) => {
  
    if (!product || !product[0] || !product[0].products) {
        // Handle the case where products data is not available or empty
        return <div>No products to display.</div>;
      }
     
   const products=product[0].products;
 

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    groupedProducts.push(products.slice(i, i + 4));
  }


      

    return (
      
      <Container>
        {groupedProducts.map((group, rowIndex) => (
        <Row key={rowIndex} className="row-cols-1 row-cols-md-2 row-cols-lg-4 "> 
        {group.map((curElem) => (
            <Col>
            
            {/* {pros.map((curElem) => { */}
                     <FeatureProducts key={curElem.id} {...curElem} />
                    {/* })} */}
            </Col>
         ))}
        </Row>
         ) )}
     </Container>

       
     
    );

                }
                
            




  export default GridView;