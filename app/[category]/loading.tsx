import LoadingSkeleton from '../components/Categories/LoadingSkeleton';

const Loading = () => {
  const images: ImageDetails[] = [
    { width: 654, height: 704, quality: 10, src: '/placeholders/category/mobile.png' },
    { width: 1378, height: 704, quality: 10, src: '/placeholders/category/tablet.png' },
    { width: 1080, height: 1120, quality: 10, src: '/placeholders/category/desktop.png' },
  ];
  const commonDetails: ImagesCommonDetails = {
    alt: 'placeholder',
    sizes: '50vw',
  };
  return (
    <>
      <div
        className="bg-[var(--text-primary-clr)] text-center py-9 leading-none 
      sm:py-16 md:py-20 lg:pt-28 lg:pb-24 categories-hero after:w-[12.3rem] 
      sm:after:w-[13.5rem] md:after:w-[15.8rem] lg:after:w-[17.5rem]"
      >
        <div
          className="mx-auto h-[1.75rem] w-[12.5rem] sm:h-[2.25rem] sm:w-[13.5rem] md:h-[2.5rem] md:w-[16.25rem]
         lg:w-[18.125rem] rounded-lg animate-pulse bg-[#363636] "
        ></div>
      </div>
      <div className="container mt-16 mb-32">
        <LoadingSkeleton images={images} commonDetails={commonDetails} />
        <LoadingSkeleton images={images} commonDetails={commonDetails} />
      </div>
    </>
  );
};

export default Loading;
