'use server';

import { Claims, getSession } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';
import { revalidateTag, unstable_cache } from 'next/cache';
import { cookies } from 'next/headers';
import { sumUpCartProductsQuantities } from './helperFunctions';
import { permanentRedirect } from 'next/navigation';

export const switchTheme = (theme: Theme) => {
  theme === 'system' ? cookies().delete('theme') : cookies().set('theme', theme);
};

export const getUserProfileData = async (): Promise<Claims> => {
  const session = await getSession();

  if (!session) {
    throw new Error(`Requires authentication`);
  }

  const { user } = session;

  return user;
};

type Action = 'ADD OR INCREMENT' | 'INCREMENT' | 'DECREMENT' | 'REMOVE' | 'CLEAR';
type productId = number;
type UserId = string;

const addOrIncrement = async (userId: UserId, productId: productId) => {
  const { rowCount } =
    await sql`SELECT * FROM carts WHERE user_id=${userId} AND product_id=${productId}`;

  rowCount === 0
    ? await sql`INSERT INTO carts (user_id,product_id) VALUES (${userId},${productId});`
    : await sql`UPDATE carts SET quantity = quantity + 1 WhERE user_id=${userId} AND product_id=${productId} ;`;
};

const increment = async (userId: UserId, productId: productId) => {
  await sql`UPDATE carts SET quantity = quantity + 1 WhERE user_id=${userId} AND product_id=${productId} ;`;
};
const decrement = async (userId: UserId, productId: productId) => {
  await sql`UPDATE carts SET quantity = quantity - 1 WhERE user_id=${userId} AND product_id=${productId} ;`;
};
const removeFromCart = async (userId: UserId, productId: productId) => {
  await sql`DELETE FROM carts WhERE user_id=${userId} AND product_id=${productId} ;`;
};
const clearCart = async (userId: UserId) => {
  await sql`DELETE FROM carts WhERE user_id=${userId};`;
};

export const updateCart = async (action: Action, productId?: productId) => {
  const { sub } = await getUserProfileData();

  switch (action) {
    case 'ADD OR INCREMENT':
      await addOrIncrement(sub, productId!);
      break;

    case 'INCREMENT':
      await increment(sub, productId!);
      break;
    case 'DECREMENT':
      await decrement(sub, productId!);
      break;
    case 'REMOVE':
      await removeFromCart(sub, productId!);
      break;
    case 'CLEAR':
      await clearCart(sub);
      break;
    default:
      throw new Error('Not valid');
  }
  revalidateTag('cart');
};

export const fetchCartProductsWithId = async (
  rawProducts: CartProductRaw[]
): Promise<PopulatedProduct[]> => {
  const populatedProducts = await Promise.all(
    rawProducts.map(async product => {
      const { rows: populatedProduct } =
        await sql`SELECT * FROM products WHERE id=${product.product_id}`;

      return { ...(populatedProduct[0] as Product), quantity: product.quantity };
    })
  );
  return populatedProducts;
};

export const getCartProducts = async (userId: string) => {
  const productsInCart = unstable_cache(
    async (id: string) => await sql`SELECT * FROM carts WHERE user_id=${id} ORDER BY id`,
    ['user-cart'],
    { tags: ['cart'] }
  );

  const productsInCartRaw: any = await productsInCart(userId);
  const products: any = await fetchCartProductsWithId(productsInCartRaw.rows);
  const totalQuantity = sumUpCartProductsQuantities(products);
  return { products, totalQuantity };
};

export const fetchProductsByCategory = async (category: string) => {
  const res = await sql`SELECT * FROM products WHERE category=${category} ORDER BY id`;
  if (!res.rowCount) throw new Error('invalid category');
  return res.rows as Product[];
};

export const fetchSingleProduct = async (id: string, category: string) => {
  if (!Number(id)) throw new Error('invalid product id');

  const res = await sql`SELECT * FROM products WHERE id=${Number(id)} AND category=${category}`;
  if (!res.rowCount) throw new Error('not valid');
  return res.rows[0] as Product;
};

export const retrieveOrderInfoFromStripeAndInsertInDb = async (
  sessionId: string,
  userId: string
) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
  const purchasedProductsRaw = await stripe.checkout.sessions.listLineItems(sessionId);

  const products = purchasedProductsRaw.data.map(async (product: PurchasedProductsRaw) => {
    const data: StripeProduct = await stripe.products.retrieve(product.price.product);
    return {
      title: product.description,
      price: product.amount_total,
      quantity: product.quantity,
      img: data.metadata.img,
    };
  });
  const populatedProducts = await Promise.all(products);

  const data = {
    populatedProducts,
    purchasedAt: stripeSession.created,
    additionalDetails: stripeSession.customer_details,
    total: stripeSession.amount_total,
    isDelivered: true,
  };

  await sql`INSERT INTO orders (user_id,details) VALUES (${userId},${JSON.stringify(data)});`;
  await clearCart(userId);
  revalidateTag('cart');
  revalidateTag('orders');
  permanentRedirect('/orders?success=true');
};

export const getUserOrders = async (userId: string) => {
  const userOrders = unstable_cache(
    async (id: string) => await sql`SELECT * FROM orders WHERE user_id=${id} ORDER BY id`,
    ['user-orders'],
    { tags: ['orders'] }
  );
  const orders: any = await userOrders(userId);
  return orders.rows;
};
