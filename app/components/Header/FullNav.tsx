import Link from 'next/link';

const FullNav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-10">
        <li>
          <Link
            href="#"
            className="font-bold hover:text-[var(--accent-clr)] transition-colors tracking-wider"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="font-bold hover:text-[var(--accent-clr)] transition-colors tracking-wider"
          >
            HEADPHONES
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="font-bold hover:text-[var(--accent-clr)] transition-colors tracking-wider"
          >
            SPEAKERS
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="font-bold hover:text-[var(--accent-clr)] transition-colors tracking-wider"
          >
            EARPHONES
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FullNav;
