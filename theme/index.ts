import {extendTheme} from '@chakra-ui/react';
import {colours, fonts} from '@/theme/styles/styles';
import {layerStyles} from '@/theme/styles/layerStyles';
import {textStyles} from '@/theme/styles/textStyles';
import {formTheme} from '@/theme/components/form';
import {buttonTheme} from '@/theme/components/button';

export const theme = extendTheme({
  colors: colours,
  fonts,
  layerStyles,
  textStyles,
  components: {
    Button: buttonTheme,
    Form: formTheme,
  },
});
