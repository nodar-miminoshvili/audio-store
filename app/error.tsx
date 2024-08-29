'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { PiMaskSadFill as SadFaceIcon } from 'react-icons/pi';

const BaseLevelErrorPage = ({ reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();
  const [_, startTransition] = useTransition();
  return (
    <div
      className="w-full h-[calc(100dvh-5rem)] flex flex-col justify-center items-center gap-2.5  bg-[var(--base-background)]
      font-medium text-xl text-[var(--text-temporary-faded)]"
    >
      <SadFaceIcon className="text-5xl text-[var(--accent-clr)]" />
      <span className="">Oops! Something Went Wrong</span>

      <button
        className="px-2.5 py-1.5 rounded-md border border-[var(--accent-clr)] w-fit
                        transition-colors hover:bg-[var(--accent-clr)] hover:text-[var(--text-temporary)]"
        onClick={() => {
          startTransition(() => {
            router.refresh();
            reset();
          });
        }}
      >
        Try Again
      </button>
      <span>OR</span>
      <div className="flex gap-1.5 items-center">
        Go Back To
        <Link
          href="/"
          className="text-2xl text-[var(--accent-clr)] font-bold hover:text-[var(--accent-clr-highlight)]
              transition-colors capitalize"
        >
          Homepage
        </Link>
      </div>
    </div>
  );
};

export default BaseLevelErrorPage;
