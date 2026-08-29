import Hero from '@/components/sections/Hero';
import PlatformIntro from '@/components/sections/PlatformIntro';
import ProductEcosystem from '@/components/sections/ProductEcosystem';
import AISection from '@/components/sections/AISection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <PlatformIntro />
      <ProductEcosystem />
      <AISection />
      <Footer />
    </main>
  );
}
