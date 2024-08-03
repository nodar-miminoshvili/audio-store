import Image from 'next/image';
import { CgMenuLeftAlt as HamburgerIcon } from 'react-icons/cg';
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri';

import logo from '@/public/Header/logo.svg';

const Header = () => {
  return (
    <header className="container flex py-8 bg-black text-white justify-between">
      <button>
        <HamburgerIcon className="text-2xl" />
      </button>
      <Image src={logo} alt="audiophile logo" />
      <button>
        <CartIcon className="text-2xl" />
      </button>
    </header>
  );
};

export default Header;
