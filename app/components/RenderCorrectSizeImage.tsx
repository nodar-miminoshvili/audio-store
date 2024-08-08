import { getImageProps } from 'next/image';

const RenderCorrectSizeImage = ({
  imageDetailsArr,
  imagesCommonDetails,
  imageStyles,
  pictureStyles,
}: {
  imageDetailsArr: ImageDetails[];
  imagesCommonDetails: ImagesCommonDetails;
  imageStyles?: string;
  pictureStyles?: string;
}) => {
  const images = imageDetailsArr.map(imageDetails => {
    const {
      props: { srcSet: source, ...rest },
    } = getImageProps({
      ...imagesCommonDetails,
      width: imageDetails.width,
      height: imageDetails.height,
      quality: imageDetails.quality,
      src: imageDetails.src,
    });
    return { source, rest };
  });

  return (
    <picture className={`${pictureStyles ? pictureStyles : ''}`}>
      <source media="(min-width: 1024px)" srcSet={images[2].source} />
      <source media="(min-width: 640px)" srcSet={images[1].source} />
      <source media="(min-width: 100px)" srcSet={images[0].source} />
      <img
        alt={imagesCommonDetails.alt}
        loading="lazy"
        className={`w-full h-auto  ${imageStyles ? imageStyles : ''} `}
      />
    </picture>
  );
};

export default RenderCorrectSizeImage;
