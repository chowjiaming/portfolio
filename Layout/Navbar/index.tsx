import {Flex, Heading, Spacer} from '@chakra-ui/react';
import {
  NAVBAR_HEIGHT,
  SECTION_PADDING,
  STANDARD_MARGIN,
} from '@/utils/constants';
import {NavbarButtons} from '@/components/Navbar/NavbarButtons';

export function Navbar(): JSX.Element {
  return (
    <Flex
      as={'nav'}
      display={{base: 'flex', lg: 'none'}}
      align={'center'}
      pos={'fixed'}
      top={0}
      left={0}
      w={'full'}
      pl={SECTION_PADDING}
      pr={STANDARD_MARGIN}
      h={NAVBAR_HEIGHT}
      _dark={{
        bg: 'gray.800',
      }}
      zIndex={2}
    >
      <Heading as={'h1'}>Joseph</Heading>
      <Spacer />
      <NavbarButtons />
    </Flex>
  );
}

Navbar.displayName = 'Navbar';
