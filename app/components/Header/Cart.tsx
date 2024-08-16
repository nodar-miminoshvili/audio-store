'use client';
import { useState } from 'react';
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri';
import FullCart from './FullCart';

const Cart = ({
  productsQuantityInCart,
  products,
}: {
  productsQuantityInCart: number;
  products: PopulatedProduct[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        className="relative"
        onClick={() => {
          setIsOpen(p => !p);
        }}
      >
        <CartIcon className="text-2xl sm:text-3xl text-white" />
        <span
          className="absolute top-0 right-0 translate-x-[40%] -translate-y-1/3 
        w-5 h-5 rounded-full bg-[var(--accent-clr)] grid place-content-center font-semibold "
        >
          {productsQuantityInCart}
        </span>
      </button>
      {isOpen && (
        <div className="absolute w-full max-w-screen-xl h-full top-0 left-1/2 -translate-x-1/2 -z-50">
          <FullCart productsQuantityInCart={productsQuantityInCart} products={products} />
        </div>
      )}
    </>
  );
};

export default Cart;
