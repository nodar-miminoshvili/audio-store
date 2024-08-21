'use client';
import Image from 'next/image';
import { useState } from 'react';
import UserOptionsDropdown from './UserOptionsDropdown';

const ProfileButton = ({ avatar }: { avatar: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(p => !p)}>
        <Image
          src={avatar}
          width={45}
          height={45}
          alt="avatar"
          className={`rounded-full block outline outline-[2px] ${
            isOpen ? 'outline-[var(--accent-clr)] opacity-100' : 'outline-[#ffffff80] opacity-85'
          } 
        hover:outline-[var(--accent-clr)] hover:opacity-100 transition-opacity
          `}
        />
      </button>
      {isOpen && <UserOptionsDropdown closeDropdown={() => setIsOpen(false)} />}
    </>
  );
};

export default ProfileButton;
