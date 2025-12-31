import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import Rules from '@/components/Rules';
import Examples from '@/components/Examples';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="relative z-10">
      <Hero />
      <Concept />
      <Rules />
      <Examples />
      <Footer />
    </main>
  );
}


