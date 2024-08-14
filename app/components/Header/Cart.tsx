import { RiShoppingCartLine as CartIcon } from 'react-icons/ri';

const Cart = ({ productsQuantityInCart }: { productsQuantityInCart: number }) => {
  return (
    <button className="relative">
      <CartIcon className="text-2xl sm:text-3xl text-white" />
      <span
        className="absolute top-0 right-0 translate-x-[40%] -translate-y-1/3 
      w-5 h-5 rounded-full bg-[var(--accent-clr)] grid place-content-center font-semibold "
      >
        {productsQuantityInCart}
      </span>
    </button>
  );
};

export default Cart;
