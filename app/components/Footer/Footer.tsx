import Link from 'next/link';
import FooterLinks from './FooterLinks';
import { CgFacebook as FbIcon } from 'react-icons/cg';
import { FaXTwitter as XIcon } from 'react-icons/fa6';
import { PiInstagramLogoBold as InstaIcon } from 'react-icons/pi';

const Footer = () => {
  return (
    <div className="bg-[var(--text-primary-clr)]">
      <footer className="container pt-14 pb-2 sm:after:left-[5.6rem] before:hidden sm:before:block ">
        <FooterLinks />
        <p className="text-[#ffffff80] mt-12 text-center text-sm leading-relaxed max-w-[27rem] mx-auto md:mx-0 md:mr-auto md:text-left">
          Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of
          music lovers and sound specialists who are devoted to helping you get the most out of
          personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <p className="text-[#ffffff80] text-center text-sm mt-12">
          Copyright 2024. All Rights Reserved
        </p>
        {/* <ul className="flex gap-3 text-white text-2xl hidden ">
          <li>
            <Link href="#">
              <FbIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <XIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <InstaIcon />
            </Link>
          </li>
        </ul> */}
      </footer>
      ;
    </div>
  );
};

export default Footer;
