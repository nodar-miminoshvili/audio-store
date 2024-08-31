import Link from 'next/link';
import RenderCorrectSizeImage from '../RenderCorrectSizeImage';

const OrangeBox = () => {
  const images = [
    {
      width: 320,
      height: 388,
      quality: 90,
      src: '/Showcase/showcaseSpeakerSM.png',
    },
    {
      width: 366,
      height: 444,
      quality: 90,
      src: '/Showcase/showcaseSpeakerMD.png',
    },

    {
      width: 756,
      height: 918,
      quality: 90,
      src: '/Showcase/showcaseSpeakerLG.png',
    },
  ];

  return (
    <div
      className="showcase bg-[var(--accent-clr)] bg-orange-box-bg overflow-hidden  
    text-center py-14 px-8 rounded-md lg:pb-0 lg:flex lg:justify-around lg:rounded-lg fade-in
    bg-no-repeat bg-cover bg-[50%_-120px]"
    >
      <RenderCorrectSizeImage
        imageDetailsArr={images}
        imagesCommonDetails={{ alt: 'Speaker ZX9', sizes: '50vw' }}
        imageStyles="mx-auto max-w-44 sm:max-w-[13rem] mb-10 lg:max-w-none lg:!w-[25rem] lg:translate-y-[12%]"
      />
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
          href="/speakers/4"
          className="btn text-white bg-[var(--text-primary-clr)] block w-fit mx-auto hover:bg-transparent transition-colors hover:outline outline-1 lg:mx-0 lg:mr-auto"
        >
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default OrangeBox;
