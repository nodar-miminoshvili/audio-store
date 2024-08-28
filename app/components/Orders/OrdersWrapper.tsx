import { getUserOrders } from '@/lib/actions';
import Orders from './Orders';

const OrdersWrapper = async ({ userId }: { userId: string }) => {
  const orders = await getUserOrders(userId);
  return (
    <div className="min-h-[calc(100dvh-5rem)] bg-[var(--base-background)]">
      <div className="max-w-screen-lg pt-12 pb-20 mx-auto">
        <p className="max-w-[90%] sm:max-w-[80%] mx-auto text-[var(--text-temporary)] font-bold text-2xl mb-8">
          Your Orders ({orders.length})
        </p>
        <Orders orders={orders} />
      </div>
    </div>
  );
};

export default OrdersWrapper;
