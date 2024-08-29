import SuccessMessage from '../components/Orders/SuccessMessage';
import OrdersWrapper from '../components/Orders/OrdersWrapper';
import { getSession } from '@auth0/nextjs-auth0';
import { permanentRedirect } from 'next/navigation';
import { retrieveOrderInfoFromStripeAndInsertInDb, validateStripeSession } from '@/lib/actions';

const OrderPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const session = await getSession();
  const successfulPurchase = !!(searchParams.success && searchParams.session_id);

  if (!session && !successfulPurchase) permanentRedirect('/');

  if (session && successfulPurchase) {
    await retrieveOrderInfoFromStripeAndInsertInDb(
      searchParams.session_id!,
      session.user.sub,
      !!searchParams['clear-cart']
    );
  }
  if (!session) await validateStripeSession(searchParams.session_id!);
  return (
    <>
      {searchParams.success ? (
        <SuccessMessage isLogged={!!session} />
      ) : (
        <OrdersWrapper userId={session!.user.sub} />
      )}
    </>
  );
};

export default OrderPage;
