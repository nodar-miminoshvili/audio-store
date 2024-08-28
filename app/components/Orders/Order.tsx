import { TfiPackage as PackageIcon } from 'react-icons/tfi';
import { IoIosArrowDown as ArrowIcon } from 'react-icons/io';
import { formatDate, formatPrice } from '@/lib/helperFunctions';
import ExpandableDetails from './ExpandableDetails';

const Order = ({
  order,
  expandOrder,
  isExpanded,
}: {
  order: Order;
  expandOrder: () => void;
  isExpanded: boolean;
}) => {
  console.log(order);
  return (
    <li
      className="border py-6 px-3.5 sm:px-5 rounded-md accordion-panel cursor-pointer transition-colors
       hover:border-[var(--accent-clr)] group"
      onClick={expandOrder}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
          <PackageIcon
            className="text-2xl text-[var(--text-temporary-faded)] 
          group-hover:text-[var(--accent-clr)] transition-colors"
          />
          {order.details.isDelivered && (
            <span
              className="scale-90 text-white bg-[var(--accent-clr)] px-3 py-1 
          rounded-xl tracking-wider text-sm sm:hidden"
            >
              DELIVERED
            </span>
          )}
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-base sm:text-xl font-bold text-[var(--text-temporary)]">
              Order #{order.id}
            </span>

            <span className="text-sm sm:text-base tracking-wider text-[var(--text-temporary-faded)] font-semibold">
              {formatDate(order.details.purchasedAt)}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          {order.details.isDelivered && (
            <span className="hidden sm:block text-white bg-[var(--accent-clr)] px-3 py-1 rounded-xl tracking-wider text-sm">
              DELIVERED
            </span>
          )}
          <span className="ml-4 text-base sm:text-lg font-bold text-[var(--text-temporary)]">
            $<span className="ml-0.5 sm:ml-1">{formatPrice(order.details.total / 100)}</span>
          </span>
          <span className="ml-2 sm:ml-4 text-xl text-[var(--text-temporary)]">
            <ArrowIcon
              className={`text-sm sm:text-base text-[var(--accent-clr)] transition-transform ${
                isExpanded && 'rotate-180'
              }`}
            />
          </span>
        </div>
      </div>
      <ExpandableDetails isExpanded={isExpanded} order={order} />
    </li>
  );
};

export default Order;
