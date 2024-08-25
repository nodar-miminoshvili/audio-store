'use client';
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';
import { CgSpinnerAlt as Spinner } from 'react-icons/cg';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const BuyNowButton = ({ stripeInfo }: { stripeInfo: stripeProductInfoRaw }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const stripe = await stripePromise;

    try {
      const response = await fetch('/api/checkout_session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([{ ...stripeInfo, quantity: 1 }]),
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
      onClick={handleClick}
      disabled={isLoading}
      className={`py-3.5 px-5 btn-primary font-bold border border-[var(--accent-clr)] hover:text-[var(--accent-clr)] 
transition-colors hover:bg-transparent block w-fit text-sm tracking-widest md:px-8 relative group ${
        isLoading && '!text-transparent'
      }`}
    >
      BUY NOW
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:text-[var(--accent-clr)] text-white">
          <Spinner className="text-4xl animate-spin" />
        </div>
      )}
    </button>
  );
};

export default BuyNowButton;
