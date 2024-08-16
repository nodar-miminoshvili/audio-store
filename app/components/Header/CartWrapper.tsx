import { sql } from '@vercel/postgres';
import Cart from './Cart';
import { sumUpCart } from '@/lib/helperFunctions';
import { unstable_cache } from 'next/cache';
import { getCartProducts } from '@/lib/actions';

const CartWrapper = async ({ userId }: { userId: string }) => {
  const productsInCart = unstable_cache(
    async (id: string) => await sql`SELECT * FROM carts WHERE user_id=${id}`,
    ['user-cart'],
    { tags: ['cart'] }
  );

  const { rows }: any = await productsInCart(userId);
  const sum = sumUpCart(rows);
  const products: any = await getCartProducts(rows);

  return (
    <>
      <Cart productsQuantityInCart={sum} products={products} />
    </>
  );
};

export default CartWrapper;
