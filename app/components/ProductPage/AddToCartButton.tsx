'use client';

import { updateCart } from '@/lib/actions';
import { useCartContext } from '@/app/contexts/CartContextProvider';
import { useTransition } from 'react';

const AddToCartButton = ({ productId, isLogged }: { productId: number; isLogged: boolean }) => {
  const { dispatchCartContext } = useCartContext();
  const [_, startTransition] = useTransition();

  return (
    <>
      {isLogged ? (
        <button
          className="btn !px-6 border border-[var(--text-temporary)]
          text-[var(--text-temporary)] hover:text-[var(--text-inverse)] 
          transition-colors hover:bg-[var(--bg-invesre)] block w-fit text-sm tracking-widest lg:!md-8"
          onClick={async () => {
            startTransition(async () => {
              dispatchCartContext({ type: 'INCREMENT' });
              await updateCart('ADD OR INCREMENT', productId);
            });
          }}
        >
          ADD TO CART
        </button>
      ) : (
        <a
          href="/api/auth/login"
          className="btn !px-6 border border-[var(--text-temporary)]
          text-[var(--text-temporary)] hover:text-[var(--text-inverse)] 
          transition-colors hover:bg-[var(--bg-invesre)] block w-fit text-sm tracking-widest lg:!md-8"
        >
          ADD TO CART
        </a>
      )}
    </>
  );
};

export default AddToCartButton;
