import {Flex} from '@chakra-ui/react';
import {SIDEBAR_WIDTH, NAVBAR_HEIGHT} from '@/utils/constants';
import Seo from '@/components/Seo';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';

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
