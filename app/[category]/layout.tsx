import AboutStore from '../components/AboutStore/AboutStore';
import CategoriesSection from '../components/Categories/CategoriesSection';

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`bg-[var(--base-background)]`}>
      {children}
      <CategoriesSection />
      <AboutStore />
    </div>
  );
}
