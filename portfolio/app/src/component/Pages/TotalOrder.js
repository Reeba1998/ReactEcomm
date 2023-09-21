import { useCartContext } from "../../Context/cartContext"
import OrderItem from "./OrderItem";
import "../../App.css";
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TotalOrder(){

    const {cart}=useCartContext();

  
    return(
        <>
        <Container className="order">
        {cart.length > 0 && (

          <Row>
            <Col xs={2}>
            <h6>IMAGE</h6>
            </Col>
            <Col xs={2}>
            <h6>NAME</h6>
            </Col>
            <Col xs={2}>
            <h6>QUAN</h6>
            </Col>
            <Col xs={2}>
            <h6>TOTAL</h6>
            </Col>

            <Col xs={2}>
            <h6>REMOVE</h6>
            </Col>
         
          </Row>
           )}  
        </Container>
     
        <div className="cart-item">
          {cart.map((curElem) => {
            return <OrderItem key={curElem.id} {...curElem} />;
          })}

{cart.length > 0 && (
   <NavLink to="/information">
   <div className="text-center mt-3">
        <Button variant="dark" className="" size="lg">
          Proceed to checkOut
        </Button>
        </div>
        </NavLink>
        
      )}

{cart.length > 0 && (
  <NavLink to="/products">
    <div className="text-center mt-3">
        <Button variant="light" className="" size="lg">
          Cont-Shopping
        </Button>
        </div>
        </NavLink>
        
      )}
        </div>

        {cart.length === 0 && (
           <div className="card text-center mt-5">
          <h1 className="mt-5">Your Cart is Empty</h1>
          <p className="mt-3">___________________________________________</p>
          </div>
        
        )}
        <div>
        {cart.length === 0 && (
          
          <NavLink to="/products">
          
          <div className="text-center mt-5">
              <Button variant="dark" className="" size="lg">
                Cont-Shopping
              </Button>
              </div>
              </NavLink>
       
        )}
        </div>

        

     

       
      
        </>
    )
}

export default TotalOrder