import { getImageProps } from 'next/image';
import Link from 'next/link';

const GreyBox = () => {
  const common = { alt: 'speaker', sizes: '50vw' };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1110,
    height: 320,
    quality: 90,
    src: '/Showcase/greySpeakerLG.jpg',
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 689,
    height: 320,
    quality: 90,
    src: '/Showcase/greySpeakerMD.jpg',
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 654,
    height: 640,
    quality: 90,
    src: '/Showcase/greySpeakerSM.jpg',
  });
  return (
    <div className="w-full rounded-lg overflow-hidden relative my-12">
      <picture>
        <source media="(min-width: 1024px)" srcSet={desktop} />
        <source media="(min-width: 640px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img {...rest} className="w-full h-auto" />
      </picture>
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

export default GreyBox;
