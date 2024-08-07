import Link from 'next/link';

const FullNav = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-10 text-sm">
        <li>
          <Link
            href="/"
            className="font-bold hover:text-[var(--accent-clr)] transition-colors tracking-widest"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            href="headphones"
            className="font-bold hover:text-[var(--accent-clr)] transition-colors tracking-widest"
          >
            HEADPHONES
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="font-bold hover:text-[var(--accent-clr)] transition-colors tracking-widest"
          >
            SPEAKERS
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="font-bold hover:text-[var(--accent-clr)] transition-colors tracking-widest"
          >
            EARPHONES
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FullNav;
