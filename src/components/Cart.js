// import React , {useState} from "react";
// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";

// export function AddCart(){
//     const [input , setInput] = useState('')
//     const dispatch = useDispatch()

//     const cartHandler = (e) => {
//         e.preventDefault()
//         dispatch(addItem(input))
//         setInput('')
//     }

// }

import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1 className="font-bold text-3xl"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-green-100 p-2 m-5"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Cart;