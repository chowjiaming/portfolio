import {useRef, useEffect} from 'react';
import {Flex} from '@chakra-ui/react';
import {useSize} from '@chakra-ui/react-use-size';
import {useSidebar} from '@/context/SidebarContext';
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
  const elementRef = useRef(null);
  const dimensions = useSize(elementRef);
  const {onOpen, onClose} = useSidebar();

  useEffect(() => {
    if (!dimensions) return;
    if (dimensions.width > 992) onOpen();
    else onClose();
    return () => onClose();
  }, [dimensions, onOpen, onClose]);

  return (
    <>
      <Seo pageTitle="Portfolio" />
      <Flex
        as={'main'}
        ref={elementRef}
        direction={'column'}
        w={'full'}
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
