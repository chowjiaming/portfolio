import {extendTheme} from '@chakra-ui/react';
import {colours, config, fonts} from './styles/styles';
import {layerStyles} from './styles/layerStyles';
import {textStyles} from './styles/textStyles';
import {formTheme} from './components/form';

export const theme = extendTheme({
  colors: colours,
  fonts,
  layerStyles,
  textStyles,
  components: {
    Form: formTheme,
  },
  config,
});
