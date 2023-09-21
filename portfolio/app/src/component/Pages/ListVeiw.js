import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FeatureProducts from "./featureProduct";
import "../../App.css";

const ListView = ({ product }) => {
  
   if (!product || !product[0] || !product[0].products) {
       
       return <div>No products to display.</div>;
     }
     
   const products=product[0].products;
 

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 2) {
    groupedProducts.push(products.slice(i, i + 2));
  }


      

    return (

    
      
      <Container>
        {groupedProducts.map((group, rowIndex) => (
        <Row key={rowIndex} className="row-cols-1 row-cols-md-2 row-cols-lg-2"> 
        {group.map((curElem) => (
            <Col className="list">
            
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
                
            




  export default ListView;