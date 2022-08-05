import React, { FC, ReactNode, useState } from "react";

export const CartContext = React.createContext<any>({});

const CartProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItem, setCartItem] = useState(0);

  const addItem = () => {
    setCartItem((prev) => prev + 1);
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
