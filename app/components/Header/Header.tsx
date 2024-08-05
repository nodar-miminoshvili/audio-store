import Image from 'next/image';
import { CgMenuLeftAlt as HamburgerIcon } from 'react-icons/cg';
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri';

import logo from '@/public/Header/logo.svg';
import FullNav from './FullNav';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ selectedTheme }: { selectedTheme: Theme }) => {
  return (
    <div className="bg-[var(--text-primary-clr)] sticky z-50 top-0">
      <header className="container flex py-8 text-white justify-between items-center border-b border-b-[#ffffff80]">
        <button className="lg:hidden basis-0 grow">
          <HamburgerIcon className="text-2xl sm:text-3xl" />
        </button>

        <Image src={logo} alt="audiophile logo" width={144} height={25} className="" />

        <FullNav />

        <div className="flex justify-end gap-8 basis-0 grow lg:flex-grow-0 ">
          <span className="hidden sm:block">
            <ThemeSwitcher selectedTheme={selectedTheme} />
          </span>
          <button>
            <CartIcon className="text-2xl sm:text-3xl text-white" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
