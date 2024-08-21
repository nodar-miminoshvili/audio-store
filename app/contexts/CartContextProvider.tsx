'use client';
import { createContext, useContext, useOptimistic } from 'react';

type CartContext = {
  optimisticTotalQuantity: number;
  dispatchCartContext: (action: { type: CartAction }) => void;
};
const CartContext = createContext<CartContext | null>(null);

const reducer = (state: number, action: { type: CartAction }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'CLEAR':
      return 0;
    default:
      throw new Error('Not valid');
  }
};

const CartContextProvider = ({
  children,
  totalQuantity,
}: {
  children: React.ReactNode;
  totalQuantity: number;
}) => {
  const [optimisticTotalQuantity, dispatchCartContext] = useOptimistic(totalQuantity, reducer);

  return (
    <CartContext.Provider value={{ optimisticTotalQuantity, dispatchCartContext }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return context;
};
