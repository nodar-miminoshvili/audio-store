import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CgSpinnerAlt as Spinner } from 'react-icons/cg';
import { usePathname } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutButton = ({ products }: { products: PopulatedProduct[] }) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleClick = async () => {
    setIsLoading(true);
    const stripe = await stripePromise;
    const productsToCheckout = products.map(product => ({
      ...product.details.stripeInfo,
      quantity: product.quantity,
    }));

    try {
      const response = await fetch(`/api/checkout_session?visitedFrom=${pathname}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productsToCheckout),
      });

      const session = await response.json();

      if (session.error) {
        console.error('Error creating checkout session:', session.error);
        alert('An error occurred. Please try again later.');
        setIsLoading(false);
        return;
      }

      const result = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error redirecting to Checkout:', error);
      alert('An error occurred. Please try again later.');
    }

    setIsLoading(false);
  };

  return (
    <button
      className={`py-3 mt-1.5  tracking-wider font-bold bg-[var(--accent-clr)] transition-colors
     hover:bg-transparent border border-[var(--accent-clr)] hover:text-[var(--accent-clr)] relative group
     ${isLoading && '!text-transparent'}`}
      disabled={isLoading}
      onClick={handleClick}
    >
      CHECKOUT
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-[var(--accent-clr)] text-white">
          <Spinner className="text-4xl animate-spin" />
        </div>
      )}
    </button>
  );
};

export default CheckoutButton;
