import { getUserProfileData } from '@/lib/actions';
import { sql } from '@vercel/postgres';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (_: NextRequest) => {
  const user = await getUserProfileData();

  const { sub, email } = user;

  try {
    await sql`INSERT INTO users (auth_id, email) VALUES (${sub},${email}) ON CONFLICT (auth_id) DO NOTHING`;
  } catch (error) {
    return NextResponse.json({ status: 400 });
  }
  return redirect('/');
};
