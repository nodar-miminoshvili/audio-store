import { PiTrashLight as TrashIcon } from 'react-icons/pi';
import CartItem from './CartItem';

const FullCart = ({
  productsQuantityInCart,
  products,
}: {
  productsQuantityInCart: number;
  products: PopulatedProduct[];
}) => {
  return (
    <>
      <div
        className="absolute top-[115%] w-[min(90dvw,24rem)] max-w-96 p-5 sm:p-8 h-80 left-1/2 -translate-x-1/2
        sm:left-[calc(100%-28rem)] sm:translate-x-0 rounded-lg
        bg-[rgb(250,250,250)] shadow-lg "
      >
        <div className="flex justify-between items-center ">
          <span className="text-lg font-bold text-[var(--text-primary-clr)] tracking-wide">
            CART ({productsQuantityInCart})
          </span>
          <button
            className="text-[var(--category-faded-text-clr)] font-semibold flex items-center gap-1.5
            transition-colors hover:text-[var(--accent-clr)] text-[0.935rem] sm:text-base"
          >
            Remove All <TrashIcon className="text-xl" />
          </button>
        </div>
        <ul className="py-5">
          {products.map(product => (
            <CartItem
              key={product.id}
              image={product.details.cartImage}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FullCart;
