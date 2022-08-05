import { useState } from "react";

const useCartPosition = () => {
  const [cartItems, setCartItems] = useState(
    sessionStorage.getItem("cartItem") ?? "0"
  );
  const getCartPosition = () => {
    const element = document.getElementById("cart-icon");
    return element?.getBoundingClientRect();
  };

  const addCartItem = () => {
    const value = cartItems ? `${+cartItems + 1}` : "1";
    sessionStorage.setItem("cartItem", value);
    setTimeout(() => {
      const cartItem = sessionStorage.getItem("cartItem");
      if (cartItem) {
        setCartItems(cartItem);
      }
    }, 1);
  };

  return {
    getCartPosition,
    addCartItem,
    cartItems,
  };
};

export default useCartPosition;
