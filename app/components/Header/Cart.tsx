'use client';
import { useState } from 'react';
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri';
import FullCart from './FullCart';
import { useCartContext } from '@/app/contexts/CartContextProvider';

const Cart = ({ products }: { products: PopulatedProduct[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { optimisticTotalQuantity } = useCartContext();

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
          {optimisticTotalQuantity}
        </span>
      </button>
      {isOpen && (
        <>
          <div
            className="absolute w-[100%] h-[100dvh] top-0 left-0 -z-50"
            onClick={() => setIsOpen(p => !p)}
          ></div>
          <div className="absolute w-full max-w-screen-xl h-full top-0 left-1/2 -translate-x-1/2 -z-50">
            <FullCart products={products} />
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
