import { sql } from '@vercel/postgres';
import ProductListing from '../components/ProductListing/ProductListing';

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const { rows: products }: { rows: Product[] } =
    await sql`SELECT * FROM audiogear WHERE category=${params.category}`;
  return (
    <>
      <div
        className="bg-[var(--text-primary-clr)] text-center py-9 leading-none 
      sm:py-16 md:py-20 lg:pt-28 lg:pb-24 categories-hero after:w-[12.3rem] 
      sm:after:w-[13.5rem] md:after:w-[15.8rem] lg:after:w-[17.5rem]"
      >
        <span className="text-[1.75rem] text-white font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-[2.5rem]">
          {params.category.toUpperCase()}
        </span>
      </div>
      <main className="container mt-16 mb-32">
        <ul className="grid gap-32">
          {products.map(product => (
            <ProductListing key={product.id} product={product} />
          ))}
        </ul>
      </main>
    </>
  );
};

export default CategoryPage;
