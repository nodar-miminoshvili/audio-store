import Link from 'next/link';
import { MdOutlineLogout as LogoutIcon } from 'react-icons/md';
import { PiListChecksBold as ListIcon } from 'react-icons/pi';

const UserOptionsDropdown = ({ closeDropdown }: { closeDropdown: () => void }) => {
  return (
    <>
      <div className="absolute w-full h-[100dvh] top-0 left-0" onClick={closeDropdown}></div>

      <div
        className="absolute w-full max-w-screen-xl h-full top-0 left-1/2 -translate-x-1/2"
        onClick={e => {
          e.target instanceof Element && e.target.tagName === 'DIV' && closeDropdown();
        }}
      >
        <div className="absolute w-40 h-28 bg-[rgb(250,250,250)] shadow-md top-[107%] right-2.5 rounded-md grid place-items-center">
          <ul className="p-3.5 text-[var(--text-primary-clr)] font-bold flex flex-col items-center gap-3">
            <li>
              <Link
                href={'/orders'}
                className="flex gap-2 items-center transition-colors hover:text-[var(--accent-clr)]"
              >
                Orders <ListIcon className="text-lg fill-[var(--accent-clr)]" />
              </Link>
            </li>
            <li>
              <a
                href="/api/auth/logout"
                className="flex items-center gap-2 hover:text-[#d9534f] transition-colors"
              >
                Logout <LogoutIcon className="text-xl fill-[#d9534f]" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserOptionsDropdown;
