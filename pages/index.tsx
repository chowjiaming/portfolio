import {Flex} from '@chakra-ui/react';
import {sidebarWidth, navbarHeight} from '@/utils/constants';
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
          lg: sidebarWidth,
        }}
        pt={{
          base: navbarHeight,
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
