import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";



const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("cartItem");
  // if (localCartData == []) {
  //   return [];
  // } 
  // else {
  //   return JSON.parse(localCartData);
  // }
  const parsedData= JSON.parse(localCartData);
  if(!Array.isArray(parsedData)) return [];
  return parsedData;
};
const initialState = {
 // cart: [],
 cart: getLocalCartData(),
 total_item: "",
 total_price: "",
  shipping_fee:500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  useEffect(()=>{

    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    localStorage.setItem("cartItem", JSON.stringify(state.cart))
  },[state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart,removeItem ,  setDecrease,
      setIncrement,}}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };