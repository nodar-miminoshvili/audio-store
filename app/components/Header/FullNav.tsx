'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FullNav = () => {
  const pathname = usePathname();
  const navLinks = [
    {
      linkToDisplay: 'HOME',
      linkTo: '/',
    },
    {
      linkToDisplay: 'HEADPHONES',
      linkTo: '/headphones',
    },
    {
      linkToDisplay: 'SPEAKERS',
      linkTo: '/speakers',
    },
    {
      linkToDisplay: 'EARPHONES',
      linkTo: '/earphones',
    },
  ];
  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-10 text-sm">
        {navLinks.map((link, idx) => {
          return (
            <li key={idx}>
              <Link
                href={link.linkTo}
                className={`font-bold hover:text-[var(--accent-clr)] transition-colors tracking-widest
              ${
                (pathname === link.linkTo || (idx > 0 && pathname.startsWith(link.linkTo))) &&
                'text-[var(--accent-clr)]'
              }`}
              >
                {link.linkToDisplay}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default FullNav;
