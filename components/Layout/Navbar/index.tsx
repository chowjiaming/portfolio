import {Flex, Spacer} from '@chakra-ui/react';
import {NAVBAR_HEIGHT, STANDARD_MARGIN} from '@/utils/constants';
import NavbarButtons from './NavbarButtons';
import NavbarHeading from './NavbarHeading';

export default function Navbar(): JSX.Element {
  return (
    <Flex
      as={'nav'}
      display={{base: 'flex', lg: 'none'}}
      align={'center'}
      pos={'fixed'}
      top={0}
      left={0}
      w={'full'}
      px={STANDARD_MARGIN}
      h={NAVBAR_HEIGHT}
      bg={'gray.200'}
      zIndex={2}
    >
      <NavbarHeading />
      <Spacer />
      <NavbarButtons />
    </Flex>
  );
}
