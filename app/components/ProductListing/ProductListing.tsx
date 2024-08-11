import Link from 'next/link';
import RenderCorrectSizeImage from '../RenderCorrectSizeImage';

const ProductListing = ({ product }: { product: Product }) => {
  const images: ImageDetails[] = [
    { width: 654, height: 704, quality: 90, src: product.details.categoryImages[0] },
    { width: 1378, height: 704, quality: 90, src: product.details.categoryImages[1] },
    { width: 1080, height: 1120, quality: 90, src: product.details.categoryImages[2] },
  ];
  const commonDetails: ImagesCommonDetails = {
    alt: product.title,
    sizes: '50vw',
  };
  return (
    <li className="flex flex-col gap-8 lg:flex-row lg:gap-32 lg:even:flex-row-reverse ">
      <RenderCorrectSizeImage
        imageDetailsArr={images}
        imagesCommonDetails={commonDetails}
        imageStyles="rounded-lg aspect-[654/704] sm:aspect-[1378/704] lg:aspect-[1080/1120]"
        pictureStyles="lg:flex-grow lg:basis-1/2"
      />
      <div className="text-center flex flex-col gap-6 lg:basis-1/2 sm:px-12 md:px-16 lg:px-0 lg:self-center lg:text-left">
        {product.details.newRelease && (
          <span className="text-sm tracking-[.7em] text-[var(--accent-clr)]">NEW PRODUCT</span>
        )}
        <h2
          className="text-[1.75rem] text-[var(--text-temporary)] font-bold tracking-wider leading-snug 
          max-w-56 text-center mx-auto lg:mx-0 lg:mr-auto lg:text-left"
        >
          {product.title.toUpperCase()}
        </h2>
        <p className="text-[var(--text-temporary-faded)] leading-relaxed">
          {product.details.description}
        </p>
        <Link
          href={`/headphones/${product.id}`}
          className="btn btn-primary border border-[var(--accent-clr)] hover:text-[var(--accent-clr)] 
          transition-colors hover:bg-transparent block w-fit text-sm mx-auto tracking-widest lg:mx-0 lg:mr-auto"
        >
          SEE PRODUCT
        </Link>
      </div>
    </li>
  );
};

export default ProductListing;
