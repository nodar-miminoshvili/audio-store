import { sql } from '@vercel/postgres';
import ProductListing from '../components/ProductListing/ProductListing';

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { rows: products }: { rows: Product[] } =
    await sql`SELECT * FROM audiogear WHERE category=${params.category}`;
  return (
    <main className="container mt-16 mb-32">
      <ul className="grid gap-32">
        {products.map(product => (
          <ProductListing key={product.id} product={product} />
        ))}
      </ul>
    </main>
  );
};

export default CategoryPage;
