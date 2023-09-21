import React, {useState} from "react"
import CartAmountToggle from "./CartAmountToggle"
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { useCartContext } from "../../Context/cartContext";

function AddToCart({product}){

  const {addToCart} = useCartContext();

    const { id,  stock } = product;
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
      };
    
      const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
      };
  return(
    <>
         <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

<NavLink to="/singleproduct/:id" onClick={() => addToCart(id,amount, product)}>
        <Button className="btn-success mt-3">Add To Cart</Button>
      </NavLink>
 
    </>
  )  
}


export default AddToCart;