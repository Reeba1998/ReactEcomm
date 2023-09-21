import { useCartContext } from "../../Context/cartContext"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import "../../App.css";

function Shipping(){
 // const navigate = useNavigate();
 const location = useLocation();
 const { email , address} = location.state;
 //console.log(address);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
     
      event.preventDefault();
      event.stopPropagation();
     
    }
   
   



  

    setValidated(true);
  };

    const {cart,shipping_fee,total_price}=useCartContext();
    // console.log("s",shipping_fee);

    return(

    

        <Container className="mt-5">
          <div>
          <NavLink to="/" className="navlink-no-underline text-dark" >
          <h3>FUROR</h3>
            </NavLink>  
          </div>
          <div className="">
          <NavLink to="/totalorder" className="navlink-no-underline text-secondary">Cart</NavLink><span>/</span><NavLink className="navlink-no-underline text-secondary " to="/information">information</NavLink>/<span className="text-secondary fw-bold">shipping</span>
          </div>

            <Row className="mt-3"> 
                <Col>
                <p className="fw-bold"> Contact </p>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group md="4" controlId="validationCustom01">
         <Form.Label>Emaii</Form.Label>
          <Form.Control
            // required
            type="text"
            placeholder={email}
            defaultValue={email}
            readOnly
          />
       
        </Form.Group>

       

        <Form.Group md="4" controlId="validationCustom01">
       <Form.Label>Address</Form.Label> 
          <Form.Control
            
            type="text"
            placeholder={address}
            defaultValue={address}
            readOnly
          />
        
        </Form.Group>

        <p className="fw-bold mt-3"> Shipping fee </p>

        
       
        <Form.Group md="4" controlId="validationCustom01" className="">
          {/* <Form.Label>Country</Form.Label> */}
          <Form.Control
            required
            type="text"
            placeholder= {`Standard  ${shipping_fee}`}
            defaultValue={`Standard  ${shipping_fee}`}
            readOnly
          />
        
        </Form.Group>
        
      </Row>
 

      <div className="d-flex  justify-content-between mt-3">
      <NavLink to="/information" className="navlink-no-underline text-dark">
      <p>Information</p>
      </NavLink>
      
     
      <NavLink to="/thankyou">
      <Button className="float-end" variant="dark" type="submit">Confirm Order</Button>
      </NavLink>
      </div>
    </Form>
                </Col>


                <Col className="text-center mt-3">
                {cart.map((curElem) => {
             return  <Card className="text-center" style={{ maxWidth: '450px' }}>
 
      <Card.Body>
        {/* <Card.Title></Card.Title> */}
        <Card.Text>
            <div className="d-flex text-center ms-2">
        <figure>
          <img src={curElem.image} alt={curElem.id}  width={80} height={80}/>
         
        </figure>
      <p className="text-center ms-2 ">  {curElem.name} </p>
      <p className="text-center ms-2 "> Quantity:{curElem.amount}</p>
      <p className="text-center ms-2 "> Rs: {curElem.amount* curElem.price}</p>
        </div>
        </Card.Text>

        
  

      

         
        
      
      </Card.Body>
    
    </Card>
     })}

<div className="text-center">
       <div className="d-flex justify-content-center">
       <p>subtotal:</p>
       <p >{total_price}</p>

       </div>
       <div className="d-flex justify-content-center" >
       <p>Shipping-Amount:</p>
       <p>{shipping_fee}</p>

       </div>

       <div className="d-flex justify-content-center">
              <p>Total:</p>
              <p>
              {shipping_fee + total_price} 
              </p>
            </div>

        </div>
                </Col>
            </Row>

        </Container>
        
        
        
    )
}

export default Shipping;