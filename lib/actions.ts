'use server';

import { Claims, getSession } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

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

type Action = 'add or increment' | 'increment' | 'decrement' | 'delete product' | 'clear Cart';
type productId = number;
type UserId = string;

const addOrIncrement = async (userId: UserId, productId: productId) => {
  const { rowCount } =
    await sql`SELECT * FROM carts WHERE user_id=${userId} AND product_id=${productId}`;

  rowCount === 0
    ? await sql`INSERT INTO carts (user_id,product_id) VALUES (${userId},${productId});`
    : await sql`UPDATE carts SET quantity = quantity + 1 WhERE user_id=${userId} AND product_id=${productId} ;`;
};

export const updateCart = async (action: Action, productId?: productId) => {
  const { sub } = await getUserProfileData();
  if (action === 'add or increment') {
    await addOrIncrement(sub, productId!);
  }
  revalidateTag('cart');
};
