import { getImageProps } from 'next/image';
import Link from 'next/link';

const OrangeBox = () => {
  const common = { alt: 'speaker', sizes: '50vw' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 756,
    height: 918,
    quality: 90,
    src: '/Showcase/showcaseSpeakerLG.png',
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 320,
    height: 388,
    quality: 90,
    src: '/Showcase/showcaseSpeakerSM.png',
  });

  return (
    <div className="showcase bg-[var(--accent-clr)] bg-orange-box-bg overflow-hidden orange-box text-center py-14 px-8 rounded-md lg:pb-0 lg:flex lg:justify-around lg:rounded-lg">
      <picture>
        <source media="(min-width: 1000px)" srcSet={desktop} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          style={{ width: '60%', height: 'auto' }}
          className="mx-auto max-w-44 sm:max-w-[13rem] mb-10 lg:max-w-none lg:!w-[25rem] lg:translate-y-[12%]"
        />
      </picture>
      <div className="max-w-[25rem] mx-auto lg:text-left lg:max-w-[20rem] lg:mx-0 lg:mt-20">
        <h2 className="text-4xl text-[var(--orange-box-text)] tracking-wide font-bold mb-6 sm:text-5xl lg:text-[3.5rem]">
          ZX9
          <br />
          SPEAKER
        </h2>
        <p className="mb-16 text-[var(--orange-box-text-faded)]">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <Link
          href="#"
          className="btn btn-black block w-fit mx-auto hover:bg-transparent transition-colors hover:outline outline-1 lg:mx-0 lg:mr-auto"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default OrangeBox;
