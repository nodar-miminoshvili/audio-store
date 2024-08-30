'use client';
import { useState } from 'react';
import { CgMenuLeftAlt as HamburgerIcon } from 'react-icons/cg';
import { CgClose as CloseIcon } from 'react-icons/cg';
import { BiUserCircle as UserIcon } from 'react-icons/bi';
import { MdOutlineLogout as LogoutIcon } from 'react-icons/md';
import { PiListChecksBold as ListIcon } from 'react-icons/pi';
import { BiLogInCircle as LoginIcon } from 'react-icons/bi';

import FullNav from './FullNav';
import ThemeSwitcher from './ThemeSwitcher';
import SignupButton from './SignupButton';
import Link from 'next/link';
import Image from 'next/image';

const HamburgerMenu = ({
  selectedTheme,
  isLogged,
  userAvatar,
}: {
  selectedTheme: Theme;
  isLogged: boolean;
  userAvatar: string | undefined;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(p => !p);
    document.documentElement.style.overflow = !isOpen ? 'hidden' : 'scroll';
  };

  return (
    <>
      <button
        className="lg:hidden basis-0 grow"
        onClick={() => {
          handleOpen();
        }}
      >
        {isOpen ? (
          <CloseIcon className="text-2xl relative z-20" />
        ) : (
          <HamburgerIcon className="text-2xl sm:text-3xl" />
        )}
      </button>
      {isOpen && (
        <div
          className="absolute top-0 left-0 w-full h-[100dvh] z-10 bg-[#00000050]"
          onClick={() => handleOpen()}
        ></div>
      )}

      <div
        className={`absolute top-full left-0 w-56 bg-[#191919]
      transition-transform h-[calc(100dvh-100%)] flex flex-col gap-4 px-6 z-20
      ${isOpen ? '-translate-x-0 ' : '-translate-x-full'}`}
        onClick={e => {
          e.target instanceof Element && e.target.tagName === 'A' && handleOpen();
        }}
      >
        <FullNav forSmallScreens />

        {isLogged && userAvatar ? (
          <div className="block sm:hidden">
            <span
              className='block w-full relative after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0
              after:w-full after:h-0.5 after:bg-[#ffffff80] after:rounded-lg after:z-0'
            >
              <Image
                src={userAvatar}
                alt="avatar"
                width={54}
                height={54}
                className="mx-auto relative z-10 aspect-square rounded-full outline outline-[#191919] outline-8"
              />
            </span>
            <div className="flex justify-between text-[0.94rem] font-semibold items-center mt-3.5 text-nowrap">
              <div className="min-w-[5rem] text-right pr-3 ">
                <Link
                  href={'/orders'}
                  className="flex gap-1.5 items-center transition-colors hover:text-[var(--accent-clr)]"
                >
                  Orders <ListIcon className="text-lg fill-[var(--accent-clr)]" />
                </Link>
              </div>
              <a
                href="/api/auth/logout"
                className="flex items-center gap-1.5 hover:text-[#d9534f] transition-colors"
              >
                Logout <LogoutIcon className="text-xl fill-[#d9534f]" />
              </a>
            </div>
          </div>
        ) : (
          <div className="block sm:hidden">
            <span
              className='block w-full relative after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0
              after:w-full after:h-0.5 after:bg-[#ffffff80] after:rounded-lg after:z-0'
            >
              <UserIcon className="text-4xl text-[#ffffff80] mx-auto relative z-10 bg-[#191919]" />
            </span>
            <div className="flex justify-between text-[0.94rem] font-semibold items-center mt-3.5 text-nowrap">
              <a
                href="/api/auth/login"
                className="transition-colors hover:text-[#ffffff80] min-w-[5rem] flex items-center justify-end pr-2 gap-1 "
              >
                Log in <LoginIcon className="text-xl" />
              </a>
              <SignupButton />
            </div>
          </div>
        )}

        <div className="block mx-auto w-fit md:hidden mt-auto py-5">
          <ThemeSwitcher selectedTheme={selectedTheme} />
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
