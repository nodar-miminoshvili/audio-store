import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward as Arrow } from 'react-icons/io';

const Category = ({ title, image }: { title: string; image: StaticImageData }) => {
  return (
    <li className="bg-[var(--grey-box)] w-full h-full rounded-md pb-5 pt-16 relative max-w-[23rem] sm:max-w-none">
      <Image
        src={image}
        alt={title}
        width={150}
        height={150}
        className="w-36 h-auto absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-[15%] "
      />
      <div className="text-center font-bold">
        <h2 className="text-lg text-[--text-primary-clr] tracking-wide mb-4">
          {title.toUpperCase()}
        </h2>
        <Link
          href={`/${title}`}
          className="text-sm flex items-center gap-2.5 transition-colors
      justify-center text-[var(--category-text)] hover:text-[var(--accent-clr)]"
        >
          SHOP <Arrow className="text-[var(--accent-clr)] text-lg font-bold" />
        </Link>
      </div>
    </li>
  );
};

export default Category;
