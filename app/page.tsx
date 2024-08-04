import AboutStore from './components/AboutStore/AboutStore';
import CategoriesSection from './components/Categories/CategoriesSection';
import Hero from './components/Hero/Hero';
import Showcase from './components/Showcase/Showcase';

export default function Home() {
  return (
    <main className="bg-[var(--base-background)] transition-colors">
      <Hero />
      <CategoriesSection />
      <Showcase />
      <AboutStore />
    </main>
  );
}
