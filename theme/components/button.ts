import {SECTION_PADDING, STANDARD_MARGIN} from '@/utils/constants';
import {defineStyle, defineStyleConfig} from '@chakra-ui/react';

const baseStyle = defineStyle({});

const sidebar = defineStyle({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: STANDARD_MARGIN,
  px: SECTION_PADDING,
  transition: 'all 0.2s ease-out',
  _hover: {
    bg: 'gray.200',
  },
  _dark: {
    _hover: {
      bg: 'gray.700',
    },
  },
});
const sidebarActive = defineStyle({
  ...sidebar,
  color: 'green.500',
  bg: 'gray.200',
  _dark: {
    color: 'teal.300',
    bg: 'gray.700',
  },
});

export const buttonTheme = defineStyleConfig({
  baseStyle,
  sizes: {},
  variants: {sidebar, sidebarActive},
  defaultProps: {},
});
