import SuccessMessage from '../components/Orders/SuccessMessage';
import Orders from '../components/Orders/Orders';
import { getSession } from '@auth0/nextjs-auth0';
import { permanentRedirect } from 'next/navigation';

const OrderPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const isLogged = !!(await getSession());
  if (!searchParams.success && !isLogged) permanentRedirect('/');
  return <>{searchParams.success ? <SuccessMessage isLogged={isLogged} /> : <Orders />}</>;
};

export default OrderPage;
