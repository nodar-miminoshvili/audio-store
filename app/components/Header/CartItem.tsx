import Image from 'next/image';
import { LuMinus as MinusIcon } from 'react-icons/lu';
import { LuPlus as PlusIcon } from 'react-icons/lu';

const CartItem = ({
  image,
  title,
  price,
  quantity,
}: {
  image: string;
  title: string;
  price: string;
  quantity: number;
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return (
    <li className="text-black flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div>
          <Image
            src={image}
            width={80}
            height={80}
            alt={title}
            className="aspect-square w-16 sm:w-20 rounded-md"
          />
        </div>
        <div className="font-bold text-sm sm:text-[0.935rem]">
          <p className="text-[var(--text-primary-clr)] ">{title}</p>
          <p className="text-[var(--text-secondary-clr)] ">
            $ {formatter.format(Number(price)).slice(1)}
          </p>
        </div>
      </div>
      <div className="flex text-[var(--text-secondary-clr)] bg-[#f1f1f1] rounded-sm overflow-hidden font-bold text-sm">
        <button className="p-1.5 sm:p-2 transition-colors hover:bg-[#d3d3d3] hover:text-[var(--accent-clr)]">
          <MinusIcon />
        </button>
        <span className="text-[var(--text-primary-clr)] p-1.5 sm:p-2 text-sm text-[0.935rem] sm:text-base">
          {quantity}
        </span>
        <button className="p-1.5 sm:p-2 transition-colors hover:bg-[#d3d3d3] hover:text-[var(--accent-clr)]">
          <PlusIcon />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
