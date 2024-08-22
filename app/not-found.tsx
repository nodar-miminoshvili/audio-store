import Link from 'next/link';
import { PiMaskSadFill as SadFaceIcon } from 'react-icons/pi';

const NotFoundPage = () => {
  return (
    <div
      className="h-[calc(100dvh-5rem)] bg-[var(--base-background)] text-[var(--text-temporary-faded)] f
    ont-medium text-xl flex flex-col justify-center items-center gap-2"
    >
      <SadFaceIcon className="text-5xl text-[var(--accent-clr)]" />
      <span>Page Not Found</span>
      <span className="flex gap-2 items-center">
        Go To
        <Link
          href="/"
          className="text-2xl text-[var(--accent-clr)] font-bold hover:text-[var(--accent-clr-highlight)]
              transition-colors"
        >
          Homepage
        </Link>
      </span>
    </div>
  );
};

export default NotFoundPage;
