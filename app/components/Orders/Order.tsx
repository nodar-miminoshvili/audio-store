import { TfiPackage as PackageIcon } from 'react-icons/tfi';
import { IoIosArrowDown as ArrowIcon } from 'react-icons/io';
import { formatDate } from '@/lib/helperFunctions';

const Order = ({ order }: { order: Order }) => {
  console.log(order);
  return (
    <li className="border py-6 px-5 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <PackageIcon className="text-2xl text-[var(--text-temporary-faded)]" />
          <div className="flex flex-col items-center gap-0.5">
            <span className="text-xl font-bold text-[var(--text-temporary)]">
              Order #{order.id}
            </span>
            <span className="tracking-wider text-[var(--text-temporary-faded)] font-semibold">
              {formatDate(order.details.purchasedAt)}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-white bg-[var(--accent-clr)] px-3 py-1 rounded-xl tracking-wider text-sm">
            DELIVERED
          </span>
          <span className="ml-4 text-lg font-bold text-[var(--text-temporary)]">
            ${order.details.total / 100}
          </span>
          <button className="ml-4 text-xl text-[var(--text-temporary)]">
            <ArrowIcon className="text-[var(--accent-clr)]" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Order;
