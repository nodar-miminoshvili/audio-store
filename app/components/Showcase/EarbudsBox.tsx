import Link from 'next/link';
import RenderCorrectSizeImage from '../RenderCorrectSizeImage';

const EarbudsBox = () => {
  const imageDetails = [
    {
      width: 654,
      height: 400,
      quality: 90,
      src: '/Showcase/budsSM.jpg',
    },
    {
      width: 678,
      height: 640,
      quality: 90,
      src: '/Showcase/budsMD.jpg',
    },
    {
      width: 540,
      height: 320,
      quality: 90,
      src: '/Showcase/budsLG.jpg',
    },
  ];

  return (
    <div className="grid grid-rows-2 gap-5 sm:grid-cols-2 sm:grid-rows-1">
      <RenderCorrectSizeImage
        imageDetailsArr={imageDetails}
        imagesCommonDetails={{ alt: 'Earphones YX1', sizes: '50vw' }}
        imageStyles="rounded-lg"
      />
      <div className="w-full bg-[--grey-box] rounded-lg flex flex-col justify-center gap-8 pl-[10%] max-h-[18rem] sm:max-h-none md:pl-[15%] lg:pl-[20%]">
        <h2 className="text-[1.75rem] font-bold text-[var(--text-primary-clr)]">YX1 EARPHONES</h2>
        <Link href="#" className="btn btn-transparent">
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default EarbudsBox;
