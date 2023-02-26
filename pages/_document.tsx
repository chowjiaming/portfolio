import {ColorModeScript} from '@chakra-ui/react';
import {config} from '@/theme/styles/styles';
import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ColorModeScript initialColorMode={config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
