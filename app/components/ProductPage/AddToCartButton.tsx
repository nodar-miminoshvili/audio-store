'use client';

import { updateCart } from '@/lib/actions';
import { useRouter } from 'next/navigation';

const AddToCartButton = ({ productId, isLogged }: { productId: number; isLogged: boolean }) => {
  const router = useRouter();

  return (
    <>
      {isLogged ? (
        <button
          className="btn !px-6 border border-[var(--text-temporary)]
          text-[var(--text-temporary)] hover:text-[var(--text-inverse)] 
          transition-colors hover:bg-[var(--bg-invesre)] block w-fit text-sm tracking-widest lg:!md-8"
          onClick={async () => {
            await updateCart('add or increment', productId);
            router.refresh();
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
