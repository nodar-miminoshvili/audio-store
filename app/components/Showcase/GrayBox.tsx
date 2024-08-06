import Link from 'next/link';
import RenderCorrectSizeImage from '../RenderCorrectSizeImage';

const GrayBox = () => {
  const imageDetails = [
    {
      width: 654,
      height: 640,
      quality: 90,
      src: '/Showcase/greySpeakerSM.jpg',
    },
    {
      width: 689,
      height: 320,
      quality: 90,
      src: '/Showcase/greySpeakerMD.jpg',
    },
    {
      width: 1110,
      height: 320,
      quality: 90,
      src: '/Showcase/greySpeakerLG.jpg',
    },
  ];

  return (
    <div className="w-full rounded-lg overflow-hidden relative my-12">
      <RenderCorrectSizeImage
        imageDetailsArr={imageDetails}
        imagesCommonDetails={{ alt: 'Speaker ZX7', sizes: '50vw' }}
      />
      <div className="absolute top-1/2 -translate-y-1/2 pl-[10%]">
        <h1 className="text-[1.75rem] font-bold text-[var(--text-primary-clr)] mb-8">
          ZX7 SPEAKER
        </h1>
        <Link href="#" className="btn btn-transparent ">
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
};

export default GrayBox;
