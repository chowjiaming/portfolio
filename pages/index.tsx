import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import Sidebar from '@/components/Sidebar';
import {Flex, Heading} from '@chakra-ui/react';
import {sidebarWidth, navbarHeight} from '@/utils/constants';

export default function Home(): JSX.Element {
  return (
    <>
      <Seo pageTitle="Portfolio" />
      <Flex
        as={'main'}
        direction={'column'}
        height={'100vh'}
        width={'100vw'}
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
        <Heading>Hello World 2023!!</Heading>
      </Flex>
    </>
  );
}
