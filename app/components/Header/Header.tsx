import Image from 'next/image';
import logo from '@/public/Header/logo.svg';
import FullNav from './FullNav';
import ThemeSwitcher from './ThemeSwitcher';
import { Session } from '@auth0/nextjs-auth0';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import ProfileButtonWrapper from './ProfileButtonWrapper';
import { Suspense } from 'react';
import HamburgerMenu from './HamburgerMenu';
import Link from 'next/link';
import Cart from './Cart';

const Header = async ({
  selectedTheme,
  session,
  products,
}: {
  selectedTheme: Theme;
  session: Session | null | undefined;
  products: PopulatedProduct[];
}) => {
  return (
    <div className="bg-[var(--text-primary-clr)] sticky z-50 top-0">
      <header className="container flex py-8 text-white justify-between items-center border-b border-b-[#ffffff80]">
        <HamburgerMenu
          selectedTheme={selectedTheme}
          isLogged={!!session}
          userAvatar={session?.user.picture}
        />
        <Link href="/">
          <Image src={logo} alt="audiophile logo" width={144} height={25} className="" priority />
        </Link>

        <FullNav />

        <div className="flex justify-end gap-8 basis-0 grow lg:flex-grow-0 lg:basis-auto items-center ">
          <span className="hidden md:block">
            <ThemeSwitcher selectedTheme={selectedTheme} />
          </span>
          {!session ? (
            <div className="hidden sm:flex gap-3 text-[0.94rem] font-semibold items-center text-nowrap">
              <LoginButton />
              <SignupButton />
            </div>
          ) : (
            <div className="flex gap-5 items-center">
              <Cart products={products} />

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
