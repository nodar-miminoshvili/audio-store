import RenderCorrectSizeImage from '../RenderCorrectSizeImage';

type Images = {
  mobile: string[];
  tablet: string[];
  desktop: string[];
};
const ProductImages = ({
  images,
  title,
  loadingSkeleton,
}: {
  images: Images;
  title: string;
  loadingSkeleton?: boolean;
}) => {
  const firstImage: ImageDetails[] = [
    { width: 654, height: 348, quality: 90, src: images.mobile[1] },
    { width: 554, height: 348, quality: 90, src: images.tablet[1] },
    { width: 445, height: 280, quality: 90, src: images.desktop[1] },
  ];
  const secondImage: ImageDetails[] = [
    { width: 654, height: 348, quality: 90, src: images.mobile[2] },
    { width: 554, height: 348, quality: 90, src: images.tablet[2] },
    { width: 445, height: 280, quality: 90, src: images.desktop[2] },
  ];
  const thirdImage: ImageDetails[] = [
    { width: 654, height: 736, quality: 90, src: images.mobile[3] },
    { width: 790, height: 736, quality: 90, src: images.tablet[3] },
    { width: 635, height: 592, quality: 90, src: images.desktop[3] },
  ];

  const commonDetails: ImagesCommonDetails = {
    alt: title,
    sizes: '50vw',
  };
  const skeletonStyle = loadingSkeleton ? 'placeholder-image' : '';
  return (
    <div className="grid gap-4 mt-24 sm:gap-5 sm:product-image-grid sm:grid-cols-[41%_1fr] grid-rows-2 lg:mt-40">
      <RenderCorrectSizeImage
        imageDetailsArr={firstImage}
        imagesCommonDetails={commonDetails}
        imageStyles="rounded-lg aspect-[654/348] sm:aspect-[554/348] lg:aspect-[445/280]"
        pictureStyles={`${skeletonStyle}`}
      />
      <RenderCorrectSizeImage
        imageDetailsArr={secondImage}
        imagesCommonDetails={commonDetails}
        imageStyles="rounded-lg aspect-[654/348] sm:aspect-[554/348] lg:aspect-[445/280]"
        pictureStyles={`${skeletonStyle} sm:row-start-2`}
      />
      <RenderCorrectSizeImage
        imageDetailsArr={thirdImage}
        imagesCommonDetails={commonDetails}
        imageStyles="rounded-lg aspect-[654/736] sm:aspect-[790/736] lg:aspect-[635/592] sm:h-full sm:object-cover"
        pictureStyles={`${skeletonStyle} sm:row-span-2`}
      />
    </div>
  );
};

export default ProductImages;
