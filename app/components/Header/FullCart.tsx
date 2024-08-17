import { PiTrashLight as TrashIcon } from 'react-icons/pi';
import CartItem from './CartItem';
import { useOptimistic, useTransition } from 'react';
import { updateCart } from '@/lib/actions';
import { sumUpCartProductsQuantities } from '@/lib/helperFunctions';

const reducer = (state: PopulatedProduct[], action: { type: CartAction; payload: ProductId }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.map(product => {
        return action.payload === product.id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      });
    case 'DECREMENT':
      const newstate: PopulatedProduct[] = [];
      state.forEach(product => {
        if (product.id !== action.payload) return newstate.push(product);

        return product.quantity === 1
          ? null
          : newstate.push({ ...product, quantity: product.quantity - 1 });
      });
      return newstate;
    case 'CLEAR':
      return [];

    default:
      throw new Error('Not valid');
  }
};

const FullCart = ({ products }: { products: PopulatedProduct[] }) => {
  const [optimisticProducts, dispatch] = useOptimistic(products, reducer);
  const [_, startTransition] = useTransition();
  const sumOfQuantities = sumUpCartProductsQuantities(optimisticProducts);
  return (
    <>
      <div
        className="absolute top-[115%] w-[min(90dvw,24rem)] max-w-96 p-5 sm:p-8 h-80 left-1/2 -translate-x-1/2
        sm:left-[calc(100%-28rem)] sm:translate-x-0 rounded-lg
        bg-[rgb(250,250,250)] shadow-lg "
      >
        <div className="flex justify-between items-center ">
          <span className="text-lg font-bold text-[var(--text-primary-clr)] tracking-wide">
            CART ({sumOfQuantities})
          </span>
          <button
            className="text-[var(--category-faded-text-clr)] font-semibold flex items-center gap-1.5
            transition-colors hover:text-[var(--accent-clr)] text-[0.935rem] sm:text-base"
            onClick={async () => {
              startTransition(async () => {
                dispatch({ type: 'CLEAR', payload: 0 });
                await updateCart('CLEAR');
              });
            }}
          >
            Remove All <TrashIcon className="text-xl" />
          </button>
        </div>
        <ul className="py-5">
          {optimisticProducts.map(product => (
            <CartItem
              key={product.id}
              id={product.id}
              image={product.details.cartImage}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
              dispatch={dispatch}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FullCart;
