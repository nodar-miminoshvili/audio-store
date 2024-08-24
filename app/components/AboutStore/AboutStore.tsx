import RenderCorrectSizeImage from '../RenderCorrectSizeImage';
import AnimateHighlightedWord from './AnimateHighlightedWord';

const AboutStore = () => {
  const images = [
    {
      width: 654,
      height: 600,
      quality: 90,
      src: '/AboutStore/listeningSM.jpg',
    },
    {
      width: 1378,
      height: 600,
      quality: 90,
      src: '/AboutStore/listeningMD.jpg',
    },
    {
      width: 540,
      height: 588,
      quality: 90,
      src: '/AboutStore/listeningLG.jpg',
    },
  ];

  return (
    <section className="container pb-28 flex flex-col gap-10 lg:flex-row-reverse aboutSection">
      <RenderCorrectSizeImage
        imageDetailsArr={images}
        imagesCommonDetails={{
          alt: 'man listening music with XX99 Mark Headphones',
          sizes: '50vw',
        }}
        imageStyles="rounded-lg"
        pictureStyles="flex-grow"
      />
      <div className="text-center lg:text-left lg:basis-1/2 self-center lg:pr-20">
        <h2 className="text-[var(--text-temporary)] text-[1.75rem] mb-8 font-bold tracking-wider sm:text-4xl ">
          BRINGING YOU THE
          <span
            className="text-[var(--accent-clr)] min-w-24 pl-3 sm:min-w-32 
                        sm:pl-[1.0625rem] inline-block text-left"
          >
            <AnimateHighlightedWord />
          </span>
          AUDIO GEAR
        </h2>
        <p className="text-[var(--text-temporary-faded)] leading-relaxed">
          Located at the heart of New York City, Audiophile is the premier store for high end
          headphones, earphones, speakers, and audio accessories. We have a large showroom and
          luxury demonstration rooms available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default AboutStore;
