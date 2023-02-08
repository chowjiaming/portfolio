import {SECTION_PADDING, STANDARD_MARGIN} from '@/utils/constants';
import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const baseStyle = defineStyle({});

const sidebar = defineStyle({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: STANDARD_MARGIN,
  px: SECTION_PADDING,
  '&.is-active': {
    backgroundColor: 'gray.100',
    backgroundSize: '200% 100%',
    backgroundPosition: 'left top',
    color: 'gray.700',
    fontWeight: 'bold',
    transition: 'all 0.3s ease-in-out',
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes: {},
  variants: {sidebar},
  defaultProps: {},
});
