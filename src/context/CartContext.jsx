import { createContext, useContext } from "react";

// Creamos el contexto del carrito
export const CartContext = createContext();

// Hook personalizado para consumir el contexto
export const useCart = () => {
  return useContext(CartContext);
};
