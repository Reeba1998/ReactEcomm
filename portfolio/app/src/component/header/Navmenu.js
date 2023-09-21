import {useState} from 'react';
import './Navmenu.css';
import'../../App.css';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

import { Link , useNavigate } from 'react-router-dom';


import { AiOutlineBars } from 'react-icons/ai';

function Navmenu(){

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const history = useNavigate();

    const handleNavigation = (route) => {
      history(route); // Use history to navigate to the specified route
      handleClose(); // Close the offcanvas menu
    };

    return(
        <>
         <AiOutlineBars  onClick={handleShow} className='ms-4 offcanvas-sm-block'/>
        <Offcanvas show={show} onHide={handleClose} className="bg-black" style={{height:500}} >
        <Offcanvas.Title variant="light" > <Offcanvas.Header closeButton /></Offcanvas.Title>
         <Offcanvas.Body className='text-dark'>
         {/* <a  href="#" className='text-white ms-2'>JUCTION</a> */}
         <Link to="/products" className='text-white ms-2 navlink-no-underline'>WomenTop</Link>
         <div>
         <Link to="/products" className='text-white ms-2 navlink-no-underline'>Junction</Link>
         </div>
<div>
{['end'].map(
          (direction) => (
     <SplitButton 
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="black"
              title="Tops"
              
            >
               <div className=''>
            
              <Dropdown.Item eventKey="1" onClick={() => handleNavigation('/products')}>Polo Shirt</Dropdown.Item>
               
              <Dropdown.Item eventKey="2"  onClick={() => handleNavigation('/products')}>Top</Dropdown.Item>
              <Dropdown.Item eventKey="3"  onClick={() => handleNavigation('/products')}>Graphic Tee</Dropdown.Item>
              </div>
</SplitButton>
          ),
        )}
      </div>
 {/* <div> */}
{/* {['end'].map(
          (direction) => (
     <SplitButton 
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="black"
              title={`Drop ${direction}`}  >
               <div className=''>
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              </div>
            </SplitButton>
          ),
        )}
      </div> */}
 </Offcanvas.Body>
      </Offcanvas>
        
        </>
    )
}


export default  Navmenu;