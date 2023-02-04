import {Flex} from '@chakra-ui/react';
import {SIDEBAR_WIDTH, NAVBAR_HEIGHT} from '@/utils/constants';
import Seo from '@/components/Seo';
import Navbar from '@/components/Layout/Navbar';
import Sidebar from '@/components/Layout/Sidebar';
import Hero from '@/components/Pages/Hero';
import About from '@/components/Pages/About';
import Portfolio from '@/components/Pages/Portfolio';
import Testimonial from '@/components/Pages/Testimonial';
import Contact from '@/components/Pages/Contact';

export default function Home(): JSX.Element {
  return (
    <>
      <Seo pageTitle="Portfolio" />
      <Flex
        as={'main'}
        direction={'column'}
        pl={{
          base: 0,
          lg: SIDEBAR_WIDTH,
        }}
        pt={{
          base: NAVBAR_HEIGHT,
          lg: 0,
        }}
      >
        <Navbar />
        <Sidebar />
        <Hero />
        <About />
        <Portfolio />
        <Testimonial />
        <Contact />
      </Flex>
    </>
  );
}
