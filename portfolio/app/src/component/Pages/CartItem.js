import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../../Context/cartContext";


function CartItem({id, name,price, image, amount}){
    const { removeItem,setDecrease, setIncrement } = useCartContext();
  
   // const setDecrease = () => {
       //  amount> 1 ? setAmount(amount - 1) : setAmount(1);
    //  };
    
      //const setIncrease = () => {
       //  amount < stock ? setAmount(amount + 1) : setAmount(stock);
     // };

    return(
        <div className="d-flex">
        <figure>
          <img src={image} alt={id}  width={100} height={100}/>
         
        </figure>
        <div className="ms-1">
        <p>{name}</p>
        <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrease(id)}
        setIncrease={() => setIncrement(id)}
      />
        </div>
        <p className="">PKR:{price * amount}</p>
        <div className="ms-4">
        <FaTrash className="remove_icon" onClick={() => removeItem(id)}/>
        </div>
      </div>


    )
}

export default CartItem;