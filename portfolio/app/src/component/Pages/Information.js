import { useCartContext } from "../../Context/cartContext"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../../App.css";

function Information(){
 const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
    
      event.preventDefault();
      event.stopPropagation();
     
    }

    else {
      const email = form.email.value; // Get the email value
      const address = form.address.value; 
      navigate('/shipping', { state: { email, address } }); // Pass email as state
    }
   
   



  

    setValidated(true);
  };

    const {cart,total_price}=useCartContext();
    // console.log("s",shipping_fee);

    return(

    

        <Container className="mt-5">
          <div>
          <NavLink to="/" className="navlink-no-underline text-dark" >
          <h3>FUROR</h3>
            </NavLink>  
          </div>
          <div className="">
          <NavLink to="/totalorder" className="navlink-no-underline text-secondary">Cart</NavLink><span>/</span><NavLink className="navlink-no-underline text-secondary fw-bold" to="/information">information</NavLink>/<span className="text-secondary">shipping</span>
          </div>

            <Row className="mt-3"> 
                <Col>
                <p className="fw-bold"> Contact </p>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group md="4" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            name="email"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <p className="fw-bold mt-3"> Shipping Address </p>

        <Form.Group md="4" controlId="validationCustom01">
          {/* <Form.Label>Country</Form.Label> */}
          <Form.Control
            required
            type="text"
            placeholder="Country"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom01" className="mt-4">
          {/* <Form.Label>First name</Form.Label> */}
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02" className="mt-4">
          {/* <Form.Label>Last name</Form.Label> */}
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group md="4" controlId="validationCustom01" className="mt-4">
          {/* <Form.Label>Country</Form.Label> */}
          <Form.Control
            required
            type="text"
            name="address"
            placeholder="Address"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03" className="mt-4">
          {/* <Form.Label>City</Form.Label> */}
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group as={Col} md="6" controlId="validationCustom05" className="mt-4">
          {/* <Form.Label></Form.Label> */}
          <Form.Control type="text" placeholder="PostalCode" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group md="4" controlId="validationCustom01" className="mt-4">
          {/* <Form.Label>Country</Form.Label> */}
          <Form.Control
            required
            type="text"
            placeholder="phone"
            defaultValue=""
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


      <Form.Group className="mb-3 mt-3">
        <Form.Check
        
          label="save information next time"
       
        />
      </Form.Group>
      {/* <NavLink to="/shipping"> */}
      <Button className="float-end" variant="dark" type="submit">Continue to shipping</Button>
      {/* </NavLink> */}
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
       <p>yet to appear</p>

       </div>

       <div className="d-flex justify-content-center">
              <p>Total:</p>
              <p>
              {total_price} 
              </p>
            </div>

        </div>
                </Col>
            </Row>

        </Container>
        
        
        
    )
}

export default Information;