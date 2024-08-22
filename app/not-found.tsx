import Link from 'next/link';
import { PiMaskSadFill as SadFaceIcon } from 'react-icons/pi';

const NotFoundPage = () => {
  return (
    <div className="h-full bg-[var(--base-background)] text-[var(--text-temporary)] font-medium text-xl">
      <div className="w-full h-[calc(100dvh-5rem)] grid place-content-center">
        <h2 className="flex flex-col justify-center items-center gap-2">
          <SadFaceIcon className="text-5xl text-[var(--accent-clr)]" />
          <span className="text-[var(--text-temporary-faded)]">Page Not Found</span>
          <span className="flex gap-2 items-center text-[var(--text-temporary-faded)] ">
            Go To
            <Link
              href="/"
              className="text-2xl text-[var(--accent-clr)] font-bold hover:text-[var(--accent-clr-highlight)]
              transition-colors"
            >
              Homepage
            </Link>
          </span>
        </h2>
      </div>
    </div>
  );
};

export default NotFoundPage;
