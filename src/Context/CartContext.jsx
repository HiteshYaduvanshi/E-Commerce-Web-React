import { createContext, useContext, useState,useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id && cartItem.size === item.size);

    if (existingItem) {
      // If the item exists, update the quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id && cartItem.size === item.size
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((item) => item.id !== itemToRemove.id || item.size !== itemToRemove.size);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{quantity,handleQuantity, cart, setCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
