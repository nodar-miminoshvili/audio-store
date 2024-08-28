'use client';
import { useState } from 'react';
import Order from './Order';

const Orders = ({ orders }: { orders: Order[] }) => {
  const [expandedOrder, setExpandedOrder] = useState<number | null>(null);
  return (
    <ul className="flex flex-col gap-4 max-w-[95%] sm:max-w-[80%] items-stretch mx-auto">
      {orders.map((order: Order) => {
        return (
          <Order
            order={order}
            key={order.id}
            expandOrder={() =>
              expandedOrder === order.id ? setExpandedOrder(null) : setExpandedOrder(order.id)
            }
            isExpanded={expandedOrder === order.id}
          />
        );
      })}
    </ul>
  );
};

export default Orders;
