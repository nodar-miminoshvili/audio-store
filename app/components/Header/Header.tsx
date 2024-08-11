import Image from 'next/image';
import { CgMenuLeftAlt as HamburgerIcon } from 'react-icons/cg';
import { RiShoppingCartLine as CartIcon } from 'react-icons/ri';

import logo from '@/public/Header/logo.svg';
import FullNav from './FullNav';
import ThemeSwitcher from './ThemeSwitcher';
import { getSession } from '@auth0/nextjs-auth0';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import ProfileButtonWrapper from './ProfileButtonWrapper';
import { Suspense } from 'react';

const Header = async ({ selectedTheme }: { selectedTheme: Theme }) => {
  const session = await getSession();

  return (
    <div className="bg-[var(--text-primary-clr)] sticky z-50 top-0">
      <header className="container flex py-8 text-white justify-between items-center border-b border-b-[#ffffff80]">
        <button className="lg:hidden basis-0 grow">
          <HamburgerIcon className="text-2xl sm:text-3xl" />
        </button>

        <Image src={logo} alt="audiophile logo" width={144} height={25} className="" priority />

        <FullNav />

        <div className="flex justify-end gap-8 basis-0 grow lg:flex-grow-0 lg:basis-auto items-center ">
          <span className="hidden sm:block">
            <ThemeSwitcher selectedTheme={selectedTheme} />
          </span>
          {!session ? (
            <div className="flex gap-3 text-[0.94rem] font-semibold items-center text-nowrap">
              <LoginButton />
              <SignupButton />
            </div>
          ) : (
            <div className="flex gap-5 items-center">
              <button>
                <CartIcon className="text-2xl sm:text-3xl text-white" />
              </button>

              <Suspense
                fallback={
                  <div className="w-[45px] h-[45px] rounded-full animate-pulse bg-[#363636] hidden sm:block"></div>
                }
              >
                <ProfileButtonWrapper />
              </Suspense>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
