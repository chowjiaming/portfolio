import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import Sidebar from '@/components/Sidebar';
import {Flex, Heading} from '@chakra-ui/react';

export default function Home() {
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
          lg: 80,
        }}
        pt={{
          base: 16,
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
