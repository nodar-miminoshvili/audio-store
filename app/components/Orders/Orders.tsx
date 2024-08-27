import { getUserOrders } from '@/lib/actions';
import Order from './Order';

const Orders = async ({ userId }: { userId: string }) => {
  const orders = await getUserOrders(userId);
  return (
    <div className="min-h-[calc(100dvh-5rem)] bg-[var(--base-background)]">
      <div className="max-w-screen-lg pt-12 mx-auto">
        <p className="max-w-[90%] sm:max-w-[80%] mx-auto text-[var(--text-temporary)] font-bold text-2xl mb-8">
          Your Orders ({orders.length})
        </p>
        <ul className="flex flex-col gap-3 max-w-[90%] sm:max-w-[80%] items-stretch mx-auto">
          {orders.map((order: Order) => {
            return <Order order={order} key={order.id} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
