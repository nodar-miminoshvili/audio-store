import SuccessMessage from '../components/Orders/SuccessMessage';
import OrdersWrapper from '../components/Orders/OrdersWrapper';
import { getSession } from '@auth0/nextjs-auth0';
import { permanentRedirect } from 'next/navigation';
import { retrieveOrderInfoFromStripeAndInsertInDb, validateStripeSession } from '@/lib/actions';
import { Metadata } from 'next';
import { OrdersPageMetadataGenerator } from '@/lib/metadata/metadataGenerators';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}): Promise<Metadata> {
  return OrdersPageMetadataGenerator(searchParams);
}

const OrderPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const session = await getSession();
  const successfulPurchase = !!(searchParams.success && searchParams.session_id);
  if (!session && !successfulPurchase) permanentRedirect('/');

  if (searchParams.session_id) await validateStripeSession(searchParams.session_id!);

  if (session && successfulPurchase) {
    await retrieveOrderInfoFromStripeAndInsertInDb(
      searchParams.session_id!,
      session.user.sub,
      !!searchParams['clear-cart']
    );
  }

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
