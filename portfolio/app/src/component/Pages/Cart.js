import {useState} from "react";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItem from "./CartItem";
import Button from 'react-bootstrap/Button';
import {NavLink} from "react-router-dom";
import "../../App.css";


import { useCartContext } from "../../Context/cartContext";
function Cart(){
    const {cart,total_item}=useCartContext();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleNavigation = () => {
       // Use history to navigate to the specified route
      handleClose(); // Close the offcanvas menu
    };



  
      
      
    return(
        <>
       
       < AiOutlineShoppingCart onClick={handleShow} className='ms-4 offcanvas-sm-block'/>
       <span class="position-absolute top-10 start-90 translate-middle badge text-dark"><span class="">{total_item}</span></span>
       
       
       <Offcanvas show={show} onHide={handleClose} placement="end" className="bg-light">
        <Offcanvas.Title variant="light" >  <Offcanvas.Header closeButton >
        <h3>BASKET</h3>
        </Offcanvas.Header>
        </Offcanvas.Title>
         <Offcanvas.Body className='text-dark'>
         { cart && Array.isArray(cart) && cart.length === 0 ? (
           <div>
            <p>Cart is Empty</p>
           </div>
         ):(

         <>
         <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
         

     
        
        
<NavLink to="/totalorder">
        <div>
          <Button variant="success" className="cont" size="lg" onClick={handleNavigation}>Continous</Button>
        </div>
        </NavLink>
        </>
        )}
       
         </Offcanvas.Body>
       </Offcanvas>
        </>
    )
}

export default Cart;