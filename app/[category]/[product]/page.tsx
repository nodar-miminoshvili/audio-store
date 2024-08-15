import GoBackButton from '@/app/components/ProductPage/GoBackButton';
import Product from '@/app/components/ProductPage/Product';
import { sql } from '@vercel/postgres';

const CategoryPage = async ({ params }: { params: { product: string } }) => {
  const { rows: products }: { rows: Product[] } =
    await sql`SELECT * FROM products WHERE id=${Number(params.product)}`;

  return (
    <main className="container pt-12 sm:pt-16 mb-32">
      <div>
        <GoBackButton category={products[0].category} />
        <Product product={products[0]} />
      </div>
    </main>
  );
};

export default CategoryPage;
