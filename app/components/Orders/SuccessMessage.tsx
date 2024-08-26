import Link from 'next/link';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

const SuccessMessage = ({ isLogged }: { isLogged: boolean }) => {
  return (
    <div
      className="flex flex-col items-center gap-3 min-h-[calc(100dvh-5rem)] bg-[var(--base-background)] 
      text-[var(--text-temporary-faded)] font-medium text-xl justify-center"
    >
      <IoMdCheckmarkCircleOutline className="text-6xl text-[var(--accent-clr)]" />
      <h2 className="flex flex-col items-center gap-2 font-bold">
        <span className="font-bold">Thank you for your purchase!</span>
        <span> Your order is confirmed</span>
      </h2>
      {isLogged ? (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center  mt-3">
          <Link
            href="/orders"
            className="border-2 border-[var(--accent-clr)] px-3.5 py-2 rounded-md font-semibold hover:bg-transparent 
          bg-[var(--accent-clr)] text-white transition-colors hover:text-[var(--accent-clr)]"
          >
            Check Your Orders
          </Link>
          <span>or</span>
          <Link
            href="/#categories"
            className="border-2 px-3.5 py-2 rounded-md font-semibold bg-transparent border-[var(--text-temporary)] text-[var(--text-temporary)]
          transition-colors hover:text-[var(--accent-clr)] hover:border-[var(--accent-clr)]"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <Link
          href="/#categories"
          className="border-2 border-[var(--accent-clr)] px-3 py-2 rounded-md font-semibold hover:bg-transparent 
      bg-[var(--accent-clr)] text-white transition-colors hover:text-[var(--accent-clr)] block mt-2"
        >
          Continue Shopping
        </Link>
      )}
    </div>
  );
};

export default SuccessMessage;
