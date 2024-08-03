import { getImageProps } from 'next/image';

const AboutStore = () => {
  const common = { alt: 'earphone', sizes: '50vw' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 540,
    height: 588,
    quality: 90,
    src: '/AboutStore/listeningLG.jpg',
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 1378,
    height: 600,
    quality: 90,
    src: '/AboutStore/listeningMD.jpg',
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 654,
    height: 600,
    quality: 90,
    src: '/AboutStore/listeningSM.jpg',
  });
  return (
    <section className="container py-2 flex flex-col gap-10 lg:flex-row-reverse">
      <picture className="flex-grow">
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source media="(min-width: 480px)" srcSet={tablet} />
        <source srcSet={mobile} />
        <img {...rest} className="w-full h-auto rounded-lg" />
      </picture>
      <div className="text-center lg:text-left lg:basis-1/2 self-center lg:pr-20">
        <h2 className="text-[var(--text-primary-clr)] text-[1.75rem] mb-8 font-bold tracking-wider sm:text-4xl ">
          BRINGING YOU THE <span className="text-[var(--accent-clr)] ">BEST</span> AUDIO GEAR
        </h2>
        <p className="text-[var(--text-secondary-clr)] leading-relaxed">
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
