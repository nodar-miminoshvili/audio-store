import { getImageProps } from 'next/image';
import Link from 'next/link';

const EarbudsBox = () => {
  const common = { alt: 'earphone', sizes: '50vw' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 540,
    height: 320,
    quality: 90,
    src: '/Showcase/budsLG.jpg',
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 678,
    height: 640,
    quality: 90,
    src: '/Showcase/budsMD.jpg',
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 654,
    height: 400,
    quality: 90,
    src: '/Showcase/budsSM.jpg',
  });
  return (
    <div className="grid grid-rows-2 gap-5 sm:grid-cols-2 sm:grid-rows-1">
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source media="(min-width: 640px)" srcSet={desktop} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img {...rest} className="w-full h-auto rounded-lg" />
      </picture>
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
