'use client';

import { switchTheme } from '@/lib/actions';
import { GoMoon as MoonIcon } from 'react-icons/go';
import { HiOutlineSun as SunIcon } from 'react-icons/hi2';
import { RiComputerLine as SystemIcon } from 'react-icons/ri';

const ThemeSwitcher = ({ selectedTheme }: { selectedTheme: Theme }) => {
  return (
    <ul
      className="themeSwitcher flex justify-between items-center w-[5.8rem] px-1.5 py-1.5 
    rounded-[100vw] border-[0.5px] text-[1.125rem] text-gray-500"
    >
      <li
        className={`${
          selectedTheme === 'dark' && 'active'
        } p-1.5 w-6 h-6 rounded-full grid place-content-center hover:text-white transition-colors`}
      >
        <button onClick={() => switchTheme('dark')}>
          <MoonIcon />
        </button>
      </li>
      <li
        className={`${
          selectedTheme === 'system' && 'active'
        } p-1.5 w-6 h-6 rounded-full grid place-content-center text-[1rem] hover:text-white transition-colors`}
      >
        <button onClick={() => switchTheme('system')}>
          <SystemIcon />
        </button>
      </li>
      <li
        className={`${
          selectedTheme === 'light' && 'active'
        } p-1.5 w-6 h-6 rounded-full grid place-content-center hover:text-white  transition-colors `}
      >
        <button onClick={() => switchTheme('light')}>
          <SunIcon />
        </button>
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
