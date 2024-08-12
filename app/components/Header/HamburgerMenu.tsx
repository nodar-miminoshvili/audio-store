'use client';
import { useRef, useState } from 'react';
import { CgMenuLeftAlt as HamburgerIcon } from 'react-icons/cg';
import { CgClose as CloseIcon } from 'react-icons/cg';
import { BiUserCircle as UserIcon } from 'react-icons/bi';

import FullNav from './FullNav';
import ThemeSwitcher from './ThemeSwitcher';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

const HamburgerMenu = ({
  selectedTheme,
  isLogged,
}: {
  selectedTheme: Theme;
  isLogged: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

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
          <CloseIcon className="text-2xl" />
        ) : (
          <HamburgerIcon className="text-2xl sm:text-3xl" />
        )}
      </button>

      <div
        className={`absolute top-full left-0 w-56 bg-[#191919]
      transition-transform h-[calc(100dvh-100%)] flex flex-col gap-4 px-6 
      ${isOpen ? '-translate-x-0 ' : '-translate-x-full'}`}
      >
        {isOpen && (
          <div
            className="absolute top-0 left-full w-[calc(100dvw-100%)] h-full bg-[#00000050]"
            ref={overlayRef}
            onClick={() => handleOpen()}
          ></div>
        )}

        <FullNav forSmallScreens />

        {isLogged ? (
          'Logged in'
        ) : (
          <div className="block sm:hidden">
            <span
              className='block w-full relative after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0
              after:w-full after:h-0.5 after:bg-[#ffffff80] after:rounded-lg after:z-0'
            >
              <UserIcon className="text-4xl text-[#ffffff80] mx-auto relative z-10 bg-[#191919]" />
            </span>
            <div className="flex justify-between text-[0.94rem] font-semibold items-center mt-3.5 text-nowrap">
              <div className="min-w-[5rem] text-right pr-3 ">
                <LoginButton />
              </div>
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
