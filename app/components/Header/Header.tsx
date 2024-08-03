import Image from 'next/image';
import { CgMenuLeftAlt as HamburgerIcon } from 'react-icons/cg';
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri';

import logo from '@/public/Header/logo.svg';
import FullNav from './FullNav';

const Header = () => {
  return (
    <div className="bg-[var(--text-primary-clr)]">
      <header className="container flex py-8 text-white justify-between border-b border-b-[#ffffff80]">
        <button className="lg:hidden">
          <HamburgerIcon className="text-2xl" />
        </button>
        <Image src={logo} alt="audiophile logo" />

        <FullNav />

        <button>
          <CartIcon className="text-2xl" />
        </button>
      </header>
    </div>
  );
};

export default Header;
