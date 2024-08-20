import Image from 'next/image';
import logo from '@/public/Header/logo.svg';
import Link from 'next/link';

const FooterLinks = () => {
  const links = ['home', 'headphones', 'speakers', 'earphones'];
  return (
    <div className="text-center md:flex items-center">
      <Link href={'/'} className="mx-auto mb-12 sm:mx-0 sm:mr-auto sm:mb-8 md:mb-0 w-fit block">
        <Image src={logo} alt="company logo" className="" />
      </Link>
      <ul className="flex flex-col gap-3 text-sm sm:flex-row md:gap-8">
        {links.map((link, idx) => {
          return (
            <li
              key={idx}
              className="font-bold text-white tracking-wider transition-colors hover:text-[var(--accent-clr)]"
            >
              <Link href={link === 'home' ? '/' : link}>{link.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;
