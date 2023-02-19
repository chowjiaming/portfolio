import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import {ChakraProvider} from '@chakra-ui/react';
import {SidebarProvider} from '@/context/SidebarContext';
import Layout from '@/Layout';
import {theme} from '@/theme';

export default function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SidebarProvider>
    </ChakraProvider>
  );
}
