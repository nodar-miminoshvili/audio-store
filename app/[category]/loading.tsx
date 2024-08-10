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
    <div className="container mt-16 mb-32">
      <LoadingSkeleton images={images} commonDetails={commonDetails} />
      <LoadingSkeleton images={images} commonDetails={commonDetails} />
    </div>
  );
};

export default Loading;
