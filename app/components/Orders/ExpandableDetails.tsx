import { formatPrice } from '@/lib/helperFunctions';
import { SlLocationPin as LocationIcon } from 'react-icons/sl';

import Image from 'next/image';

const ExpandableDetails = ({ isExpanded, order }: { isExpanded: boolean; order: Order }) => {
  return (
    <div
      className={`accordion-content grid ${
        !isExpanded ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'
      } transition-[grid-template-rows] duration-500`}
    >
      <div className="overflow-hidden">
        <p className="mt-6 mb-4 font-semibold text-[var(--text-temporary)]">Order Details</p>
        <ul className="flex flex-col gap-4 mb-4 sm:px-2 ">
          {order.details.populatedProducts.map((product, idx) => {
            return (
              <li
                key={idx}
                className="flex flex-wrap xs:flex-nowrap gap-1 xs:gap-0 items-center border-b pb-4 last:border-b-0 "
              >
                <Image
                  src={product.img}
                  width={86}
                  height={86}
                  alt={product.title}
                  className="max-w-16 max-h-16 sm:max-w-none sm:max-h-none aspect-square rounded-md "
                />
                <div className="ml-3 flex-grow flex-shrink-0 basis-full xs:flex-grow-0 xs:flex-shrink xs:basis-auto">
                  <p className="text-[var(--text-temporary)] font-bold mb-1 text-[0.9375rem] sm:text-base">
                    {product.title}
                  </p>
                  <p className="text-[var(--text-temporary-faded)] font-medium tracking-wide text-sm sm:text-base">
                    Quantity:
                    <span className="text-[var(--accent-clr)] font-semibold ml-0.5 ">
                      {product.quantity}
                    </span>
                  </p>
                </div>
                <div className="pl-0 xs:pl-4 sm:pl-0 mx-auto xs:mx-0 xs:ml-auto flex flex-col items-center gap-1.5 sm:gap-0.5">
                  <p className="text-[var(--text-temporary)] font-semibold text-base sm:text-lg">
                    $<span className="ml-1">{formatPrice(product.price / 100)}</span>
                  </p>
                  {product.quantity > 1 && (
                    <span
                      className="text-[var(--text-temporary-faded)] text-sm font-medium flex 
                    flex-col items-center sm:block"
                    >
                      ${formatPrice(product.price / 100 / product.quantity)} <span>per item</span>
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mb-6 sm:mb-2">
          <p className="text-[var(--text-temporary-faded)] mb-2 ">Shipping Address</p>
          <div className="flex gap-2 items-start">
            <span>
              <LocationIcon className="text-[var(--text-temporary-faded)] text-xl mt-1" />
            </span>
            <div className="text-[0.9375rem] sm:text-base flex flex-col gap-0.5 text-[var(--text-temporary)] font-medium">
              {Object.values(order.details.additionalDetails.address).map((address, idx) => {
                return <span key={idx}>{address}</span>;
              })}
            </div>
          </div>
        </div>
        <p className="text-center sm:text-right px-3 text-xl font-medium text-[var(--accent-clr)]">
          Total:
          <span className="text-[var(--text-temporary)] ml-1">
            $ {formatPrice(order.details.total / 100)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ExpandableDetails;
