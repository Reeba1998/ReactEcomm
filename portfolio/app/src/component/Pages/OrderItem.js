import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import { useCartContext } from "../../Context/cartContext";



function OrderItem({id, name,price, image, amount}){
    const { removeItem,setDecrease, setIncrement } = useCartContext();
  
   // const setDecrease = () => {
       //  amount> 1 ? setAmount(amount - 1) : setAmount(1);
    //  };
    
      //const setIncrease = () => {
       //  amount < stock ? setAmount(amount + 1) : setAmount(stock);
     // };


    return(

        

        <Container className="mt-3">

           
        
            
         
<Row>

    <Col xs={1} lg={2}>
   
    <figure>
          <img src={image} alt={id}  width={80} height={80}/>
         
        </figure>
    </Col>
    <Col xs={2} lg={2}>
    <div className="ms-1">
   
        <p>{name}</p>
     
        </div>
    </Col>
    <Col xs={4} lg={2}>
   
    <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />
    </Col>
    <Col xs={2} lg={2}>
  
    <p className="">Rs:{price * amount}</p>
    </Col>
    <Col xs={2} lg={2}>
    <div className="">
        <FaTrash className="remove_icon" onClick={() => removeItem(id)}/>
        </div>
    
    </Col>
   </Row>








        </Container>

      
       


    )
}

export default OrderItem;