import GoBackButton from '@/app/components/ProductPage/GoBackButton';
import Product from '@/app/components/ProductPage/Product';
import { fetchSingleProduct } from '@/lib/actions';
import { ProductPageMetadataGenerator } from '@/lib/metadata/metadataGenerators';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { product: string; category: string };
}): Promise<Metadata> {
  return ProductPageMetadataGenerator(params);
}

const CategoryPage = async ({ params }: { params: { product: string; category: string } }) => {
  const product = await fetchSingleProduct(params.product, params.category);
  return (
    <main className="container pt-12 sm:pt-16 mb-32">
      <div>
        <GoBackButton category={product.category} />
        <Product product={product} />
      </div>
    </main>
  );
};

export default CategoryPage;
