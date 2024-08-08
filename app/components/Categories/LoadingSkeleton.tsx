import RenderCorrectSizeImage from '../RenderCorrectSizeImage';

const LoadingSkeleton = ({
  images,
  commonDetails,
}: {
  images: ImageDetails[];
  commonDetails: ImagesCommonDetails;
}) => {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-32 lg:even:flex-row-reverse odd:mb-32 ">
      <RenderCorrectSizeImage
        imageDetailsArr={images}
        imagesCommonDetails={commonDetails}
        imageStyles="rounded-lg aspect-[654/704] sm:aspect-[1378/704] lg:aspect-[1080/1120]"
        pictureStyles="lg:flex-grow lg:basis-1/2 placeholder-image "
      />

      <div className="flex flex-col gap-6 items-center lg:basis-1/2 lg:items-start  lg:px-0 lg:self-center">
        <div className="lg:mx-0 lg:mr-auto w-[10rem] h-[1.25rem] bg-[var(--placeholder-clr)] animate-pulse rounded-lg"></div>
        <div className="lg:mx-0 lg:mr-auto w-[14rem] h-[5rem] bg-[var(--placeholder-clr)] animate-pulse rounded-lg"></div>
        <div className="w-[20rem] h-[8rem] sm:w-[31rem] sm:h-[5rem] lg:w-[27.5rem] bg-[var(--placeholder-clr)] animate-pulse rounded-lg"></div>
        <div className="w-[11rem] h-[3rem] bg-[var(--placeholder-clr)] animate-pulse rounded-lg"></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
