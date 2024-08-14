import { getSession } from '@auth0/nextjs-auth0';
import RenderCorrectSizeImage from '../RenderCorrectSizeImage';
import AddToCartButton from './AddToCartButton';
import Features from './Features';
import ProductImages from './ProductImages';

const Product = async ({ product }: { product: Product }) => {
  const images: ImageDetails[] = [
    { width: 654, height: 654, quality: 90, src: product.details.productImages.mobile[0] },
    { width: 562, height: 960, quality: 90, src: product.details.productImages.tablet[0] },
    { width: 1080, height: 1120, quality: 90, src: product.details.productImages.desktop[0] },
  ];

  const commonDetails: ImagesCommonDetails = {
    alt: product.title,
    sizes: '50vw',
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const session = await getSession();

  return (
    <div>
      <div className="flex flex-col gap-8 sm:flex-row lg:gap-32 ">
        <RenderCorrectSizeImage
          imageDetailsArr={images}
          imagesCommonDetails={commonDetails}
          imageStyles="rounded-lg aspect-[654/654] sm:aspect-[562/960] lg:aspect-[1080/1120]"
          pictureStyles="sm:basis-[calc(100%-45%-2rem)] lg:flex-grow "
        />
        <div className="flex flex-col gap-6 sm:basis-[55%] sm:self-center lg:basis-1/2">
          {product.details.newRelease && (
            <span className="text-sm tracking-[.7em] text-[var(--accent-clr)]">NEW PRODUCT</span>
          )}
          <h2
            className="text-[1.75rem] text-[var(--text-temporary)] font-bold tracking-wider leading-snug 
          max-w-56 text-left  lg:text-[2.5rem] lg:max-w-[20rem] lg:leading-snug"
          >
            {product.title.toUpperCase()}
          </h2>
          <p className="text-[var(--text-temporary-faded)] leading-relaxed text-[0.95rem] lg:pr-[12%]">
            {product.details.description}
          </p>

          <span className="text-lg font-bold text-[var(--text-temporary)]">
            $ {formatter.format(Number(product.price)).slice(1)}
          </span>
          <div className="flex gap-3.5 flex-wrap sm:gap-4 items-end md:gap-4 lg:gap-5">
            <button
              className="py-3.5 px-5 btn-primary font-bold border border-[var(--accent-clr)] hover:text-[var(--accent-clr)] 
            transition-colors hover:bg-transparent block w-fit text-sm tracking-widest md:px-8"
            >
              BUY NOW
            </button>

            <AddToCartButton productId={product.id} isLogged={!!session} />
          </div>
        </div>
      </div>
      <Features features={product.details.features} inTheBox={product.details.inTheBox} />
      <ProductImages images={product.details.productImages} title={product.title} />
    </div>
  );
};

export default Product;
