import AboutStore from './components/AboutStore/AboutStore';
import CategoriesSection from './components/Categories/CategoriesSection';
import Hero from './components/Hero/Hero';
import Showcase from './components/Showcase/Showcase';
import { Metadata } from 'next';
import metadataDetails from '@/lib/metadata/metadataDetails';

export const metadata: Metadata = {
  title: metadataDetails.homepage.title,
  description: metadataDetails.homepage.description,
};

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
