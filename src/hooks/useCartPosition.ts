import { useContext } from "react";
import { CartContext } from "../provider/CartProvider";

const useCartPosition = () => {
  const context = useContext(CartContext);
  const { addItem, cartItem } = context;
  console.log("context", context);

  console.log("addItem", addItem);
  console.log("cartItem", cartItem);

  const getCartPosition = () => {
    const element = document.getElementById("cart-icon");
    return element?.getBoundingClientRect();
  };

  return {
    getCartPosition,
    addCartItem: addItem,
    cartItems: cartItem,
  };
};

export default useCartPosition;
