import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';





function Joinclub(){
    return(
        <>
      <Container>
        <Row>
            <Col xs={12} lg={6}> 
            <div className="text-start">
                <h2>JOIN <span className="fs-1 text-danger">FURRIOR CLUB</span></h2>
                <p>subscribe to exclusive updates</p>
            </div>
            </Col>


            <Col xs={12} lg={6}>
          
            <Form className="mt-3">
            <Row>
                <Col xs={12} lg={10}> 
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Control type="email" placeholder="Email" />
       
       </Form.Group>
       </Col>
       <Col xs={12} lg={1}>
       <Button type="submit" variant="dark">Submit</Button>
       </Col>
       </Row>
      </Form>

      </Col>
      
      
    
      </Row>
            
        
      </Container>
        </>
    )
}

export default Joinclub;