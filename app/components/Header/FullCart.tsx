import { PiTrashLight as TrashIcon } from 'react-icons/pi';
import { RiShoppingCart2Line as EmptyCartIcon } from 'react-icons/ri';
import CartItem from './CartItem';
import { useOptimistic, useTransition } from 'react';
import { updateCart } from '@/lib/actions';
import {
  formatPrice,
  sumUpCartProductsPrices,
  sumUpCartProductsQuantities,
} from '@/lib/helperFunctions';

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
  const totalPrice = sumUpCartProductsPrices(optimisticProducts);

  return (
    <>
      <div
        className="absolute top-[115%] w-[min(90dvw,24rem)] max-w-96 p-5 sm:py-8 sm:px-6 h-96 left-1/2 -translate-x-1/2
        sm:left-[calc(100%-28rem)] sm:translate-x-0 rounded-lg
        bg-[rgb(250,250,250)] shadow-lg flex flex-col gap-3.5"
      >
        {optimisticProducts.length ? (
          <>
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
            <div className="h-4/6 overflow-y-scroll cartWrapper">
              <ul className="pr-1.5 flex flex-col gap-3">
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
            <div className="flex justify-between items-center">
              <span className="text-[var(--category-faded-text-clr)] font-semibold">TOTAL</span>
              <span className="text-[var(--text-primary-clr)] font-bold text-lg">
                $ {formatPrice(totalPrice)}
              </span>
            </div>
          </>
        ) : (
          <div className="w-full h-full grid place-items-center py-14">
            <p className="text-lg  text-[var(--category-faded-text-clr)] font-bold">
              Your cart is empty
            </p>
            <EmptyCartIcon className="text-8xl text-[var(--category-faded-text-clr)]" />
          </div>
        )}
      </div>
    </>
  );
};

export default FullCart;
