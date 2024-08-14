import { sql } from '@vercel/postgres';
import Cart from './Cart';
import { sumUpCart } from '@/lib/helperFunctions';
import { unstable_cache } from 'next/cache';

const CartWrapper = async ({ userId }: { userId: number }) => {
  const productsInCart = unstable_cache(
    async id => await sql`SELECT * FROM carts WHERE user_id=${id}`,
    ['user-cart'],
    { tags: ['cart'] }
  );

  const { rows } = await productsInCart(userId);
  const sum = sumUpCart(rows as { quantity: number }[]);

  return (
    <>
      <Cart productsQuantityInCart={sum} />
    </>
  );
};

export default CartWrapper;
