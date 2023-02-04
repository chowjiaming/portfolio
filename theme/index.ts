import {extendTheme} from '@chakra-ui/react';
import {colours, fonts} from './styles/styles';
import {layerStyles} from './styles/layerStyles';
import {textStyles} from './styles/textStyles';

export const theme = extendTheme({
  colors: colours,
  fonts,
  layerStyles,
  textStyles,
  config: {
    // initialColorMode: 'system',
  },
});
