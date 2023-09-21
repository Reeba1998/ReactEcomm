import React from "react";
// Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
// Icons
import{ BiLogoFacebook} from 'react-icons/bi';
import{AiFillInstagram} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {FaTiktok} from 'react-icons/fa';
// component
import Joinclub from "./joinClub";

function Footers(){

 
  

    return(

        <>
     <Card className="text-center" variant="dark" fixed="bottom">
     <Card.Body className="bg-dark text-light" >
        <Card.Text>
          
            <Joinclub />
           
       </Card.Text>
     </Card.Body>
    
    <Card.Footer className="bg-dark text-light" >
        <Card.Text>
         <Row>
            <Col xs={12} md={6} lg={3}>
                <br></br>
                
            <h2>FURRIOR</h2>
            </Col>
            <Col xs={12} md={6} lg={3}>
            <h5>About Us</h5>
            <ListGroup>
      <ListGroup.Item className="bg-dark text-light" style={{border:'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-light" style={{border:'none'}}> Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-light" style={{border:'none'}}> Morbi leo risus</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-light" style={{border:'none'}}>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
            </Col>
            <Col xs={12} md={6} lg={3}>
            <h5 >Furrior</h5>
            <ListGroup>
      <ListGroup.Item className="bg-dark text-light" style={{border:'none'}}>Cras justo odio</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-light" style={{border:'none'}}> Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-light" style={{border:'none'}}> Morbi leo risus</ListGroup.Item>
      <ListGroup.Item className="bg-dark text-light" style={{border:'none'}}>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
            </Col>
            <Col xs={12} md={6} lg={3}>
            <h5>Follow Us</h5>

            <Stack direction="horizontal" gap={1} className="d flex justify-content-center" >
     
      <Badge bg="light" text="dark"> <BiLogoFacebook/> </Badge>
      <Badge bg="light" text="dark"> <AiFillInstagram/> </Badge>
      <Badge bg="light" text="dark"> <AiFillYoutube/> </Badge>
      <Badge bg="light" text="dark"> <FaTiktok/> </Badge>
     
    </Stack>
            </Col>
         </Row>
        </Card.Text>
      </Card.Footer>
    </Card>
        
        </>
    )
}


export default Footers;