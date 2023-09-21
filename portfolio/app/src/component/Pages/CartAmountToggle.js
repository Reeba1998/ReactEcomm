import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="">
      <div className="d-flex">
        <button onClick={() => setDecrease()} className="rounded-circle m-1">
        <FaMinus/>
        </button>
        <div className="fw-bold m-2">{amount}</div>
        <button onClick={() => setIncrease()} className="rounded-circle m-1">
        <FaPlus/>
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;