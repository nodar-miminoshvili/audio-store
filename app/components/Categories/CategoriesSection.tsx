import speakers from '@/public/Categories/categoriesSpeakers.png';
import headphones from '@/public/Categories/categoriesHeadphones.png';
import buds from '@/public/Categories/categoriesBuds.png';
import Category from './Category';

const CategoriesSection = () => {
  const categories = [
    { title: 'headphones', image: headphones },
    { title: 'speakers', image: speakers },
    { title: 'earphones', image: buds },
  ];
  return (
    <section className="container py-28 sm:py-32 ">
      <ul className="flex flex-col items-center gap-20 sm:flex-row sm:gap-5">
        {categories.map((category, idx) => {
          return <Category key={idx} title={category.title.toUpperCase()} image={category.image} />;
        })}
      </ul>
    </section>
  );
};

export default CategoriesSection;
