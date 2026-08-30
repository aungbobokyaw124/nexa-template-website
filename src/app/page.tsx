import Hero from '@/components/sections/Hero';
import PlatformIntro from '@/components/sections/PlatformIntro';
import ProductEcosystem from '@/components/sections/ProductEcosystem';
import AISection from '@/components/sections/AISection';
import Automation from '@/components/sections/Automation';
import Services from '@/components/sections/Services';
import Pricing from '@/components/sections/Pricing';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <PlatformIntro />
      <ProductEcosystem />
      <AISection />
      <Automation />
      <Services />
      <Pricing />
      <Footer />
    </main>
  );
}
