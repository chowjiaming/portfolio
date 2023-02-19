import Seo from '@/components/Seo';
import Hero from '@/components/Pages/Hero';
import About from '@/components/Pages/About';
import Portfolio from '@/components/Pages/Portfolio';
import Testimonial from '@/components/Pages/Testimonial';
import Contact from '@/components/Pages/Contact';

export default function Home(): JSX.Element {
  return (
    <>
      <Seo pageTitle="Portfolio" />

      <Hero />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
    </>
  );
}
