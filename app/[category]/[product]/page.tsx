import Product from '@/app/components/ProductPage/Product';
import { sql } from '@vercel/postgres';

const CategoryPage = async ({ params }: { params: { product: string } }) => {
  const { rows: products }: { rows: Product[] } =
    await sql`SELECT * FROM audiogear WHERE id=${Number(params.product)}`;

  return (
    <main className="container mt-16 mb-32">
      <div>
        <Product product={products[0]} />
      </div>
    </main>
  );
};

export default CategoryPage;
