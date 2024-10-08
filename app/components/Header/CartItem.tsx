import Image from 'next/image';
import { LuMinus as MinusIcon } from 'react-icons/lu';
import { LuPlus as PlusIcon } from 'react-icons/lu';
import { updateCart } from '@/lib/actions';
import { useTransition } from 'react';
import { formatPrice } from '@/lib/helperFunctions';
import { useCartContext } from '@/app/contexts/CartContextProvider';
import Link from 'next/link';

const CartItem = ({
  id,
  image,
  title,
  category,
  price,
  quantity,
  dispatch,
}: {
  id: number;
  image: string;
  title: string;
  category: string;
  price: string;
  quantity: number;
  dispatch: (action: { type: CartAction; payload: number }) => void;
}) => {
  const [_, startTransition] = useTransition();
  const lastIdx = title.lastIndexOf(' ');
  const shortTitle = title.substring(0, lastIdx);
  const { dispatchCartContext } = useCartContext();

  return (
    <li className="text-black flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link className="block" href={`/${category}/${id}`}>
          <Image
            src={image}
            width={80}
            height={80}
            alt={title}
            className="aspect-square w-16 sm:w-20 rounded-md"
          />
        </Link>
        <div className="font-bold text-sm sm:text-[0.935rem]">
          <Link
            href={`/${category}/${id}`}
            className="text-[var(--text-primary-clr)] block transition-colors hover:text-[var(--accent-clr)]"
          >
            {shortTitle}
          </Link>
          <p className="text-[var(--text-secondary-clr)] ">
            $ {formatPrice(Number(price) * quantity)}
          </p>
        </div>
      </div>
      <div className="flex text-[var(--text-secondary-clr)] bg-[#f1f1f1] rounded-sm overflow-hidden font-bold text-sm">
        <button
          className="p-1.5 sm:p-2 transition-colors hover:bg-[#d3d3d3] hover:text-[var(--accent-clr)]"
          onClick={async () => {
            startTransition(async () => {
              dispatch({ type: 'DECREMENT', payload: id });
              dispatchCartContext({ type: 'DECREMENT' });
              quantity === 1 ? await updateCart('REMOVE', id) : await updateCart('DECREMENT', id);
            });
          }}
        >
          <MinusIcon />
        </button>
        <span
          className="text-[var(--text-primary-clr)] p-1.5 sm:p-2 text-sm text-[0.935rem] sm:text-base
                    min-w-[1.375rem] sm:min-w-[1.625rem] text-center"
        >
          {quantity}
        </span>
        <button
          className="p-1.5 sm:p-2 transition-colors hover:bg-[#d3d3d3] hover:text-[var(--accent-clr)]"
          onClick={async () => {
            startTransition(async () => {
              dispatch({ type: 'INCREMENT', payload: id });
              dispatchCartContext({ type: 'INCREMENT' });
              await updateCart('INCREMENT', id);
            });
          }}
        >
          <PlusIcon />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
