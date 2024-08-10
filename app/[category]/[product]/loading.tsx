import ProductImages from '@/app/components/ProductPage/ProductImages';
import RenderCorrectSizeImage from '@/app/components/RenderCorrectSizeImage';

const LoadingProductPage = () => {
  const mainImages: ImageDetails[] = [
    { width: 654, height: 654, quality: 90, src: '/placeholders/product/mainSM.png' },
    { width: 562, height: 960, quality: 90, src: '/placeholders/product/mainMD.png' },
    { width: 1080, height: 1120, quality: 90, src: '/placeholders/product/mainLG.png' },
  ];

  const commonDetails: ImagesCommonDetails = {
    alt: 'placeholder',
    sizes: '50vw',
  };

  const mobile = [
    '',
    '/placeholders/product/firstSM.png',
    '/placeholders/product/firstMD.png',
    '/placeholders/product/firstLG.png',
  ];
  const desktop = [
    '',
    '/placeholders/product/thirdSM.png',
    '/placeholders/product/thirdMD.png',
    '/placeholders/product/thirdLG.png',
  ];
  const tablet = mobile;

  return (
    <div className="container mt-16 mb-32">
      <div className="flex flex-col gap-8 sm:flex-row lg:gap-32 ">
        <RenderCorrectSizeImage
          imageDetailsArr={mainImages}
          imagesCommonDetails={commonDetails}
          imageStyles="rounded-lg aspect-[654/654] sm:aspect-[562/960] lg:aspect-[1080/1120]"
          pictureStyles="sm:basis-[calc(100%-45%-2rem)] lg:flex-grow placeholder-image "
        />
        <div className="flex flex-col gap-6 sm:basis-[55%] sm:self-center lg:basis-1/2">
          <div className="w-3/5 h-5 placeholder-box"></div>
          <div className="max-w-56 lg:max-w-[20rem] h-20 placeholder-box"></div>
          <div className="lg:pr-[12%] h-24 placeholder-box"></div>

          <div className="w-28 h-7 placeholder-box"></div>
          <div className="flex gap-3.5 flex-wrap sm:gap-4 items-end md:gap-4 lg:gap-5">
            <div className=" w-[7.5rem] h-[3.15rem] placeholder-box"></div>
            <div className=" w-[9.7rem] h-[3.15rem] placeholder-box "></div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-20 lg:flex-row">
        <div className="lg:basis-2/3">
          <div className="mb-6 w-36 h-10 placeholder-box"></div>
          <div className="mb-5 h-[12rem] lg:h-[8rem] placeholder-box"></div>
          <div className="h-[11rem] lg:h-[7rem] placeholder-box"></div>
        </div>
        <div className="lg:basis-1/3 ">
          <div className="w-36 h-10 placeholder-box mb-6"></div>
          <div className="w-56 h-48 placeholder-box"></div>
        </div>
      </div>

      <ProductImages
        images={{
          mobile: mobile,
          tablet: tablet,
          desktop: desktop,
        }}
        title="placeholder"
        loadingSkeleton
      />
    </div>
  );
};

export default LoadingProductPage;
