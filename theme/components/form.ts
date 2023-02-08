import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const baseStyle = defineStyle({});

const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
};

const floating = defineStyle({
  container: {
    _focusWithin: {
      label: {
        ...activeLabelStyles,
      },
    },
    'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
      {
        ...activeLabelStyles,
      },
    label: {
      top: 0,
      left: 0,
      zIndex: 2,
      pos: 'absolute',
      backgroundColor: 'white',
      pointerEvents: 'none',
      mx: 3,
      px: 1,
      my: 2,
      transformOrigin: 'left top',
      _dark: {
        backgroundColor: 'gray.800',
      },
    },
  },
});

export const formTheme = defineStyleConfig({
  baseStyle,
  sizes: {},
  variants: {
    floating,
  },
  defaultProps: {},
});
