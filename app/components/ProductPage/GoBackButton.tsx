import Link from 'next/link';
import { IoIosArrowBack as ArrowIcon } from 'react-icons/io';

const GoBackButton = ({ category }: { category: string }) => {
  return (
    <Link
      href={`/${category}`}
      className="mb-8 sm:mb-12 text-[var(--text-temporary-faded)] font-semibold w-fit flex items-center gap-1
      transition-colors hover:text-[var(--accent-clr)]"
    >
      <ArrowIcon />
      Go Back
    </Link>
  );
};

export default GoBackButton;
