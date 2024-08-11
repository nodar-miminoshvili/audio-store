'use server';

import { Claims, getSession } from '@auth0/nextjs-auth0';
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
