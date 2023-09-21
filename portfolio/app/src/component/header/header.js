import React from 'react';
import './header.css';
// import {  FiSearch } from 'react-icons/fi';

import Container from 'react-bootstrap/Container';


import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


import Navmenu from './Navmenu';
// import Form from 'react-bootstrap/Form';
import Login from './Login';
import Cart from '../Pages/Cart';
import Searchbar from './searchbar';
import { Link } from 'react-router-dom';







function Header(){

 

    return(
      <Container>
         <Row>
        <Navbar expand="lg" className="bg-body-white" fixed="top">
        <Container fluid>
       
              <Col xs={2}>
          <Navbar.Brand href="#">
                  <Navmenu />
         </Navbar.Brand>
         </Col>
         <Col xs={3}>
         <Nav   className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}>
        
        <Link to="/" className='text-dark mt-3' >
             
              <h2>FURRIOR</h2>
            </Link>
        
         </Nav>
         </Col>

         <Nav>

        <Col xs={1.5}> 
        <div>
        
          <Searchbar/>
         <Login/>
         
         <Cart/>
         

         </div>
       
           
       

       
       </Col>

       </Nav>

      

      


       </Container>
     
       
      </Navbar>
      </Row>
      </Container>
  
    );
}

export default Header;