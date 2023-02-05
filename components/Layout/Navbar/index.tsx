import {Flex} from '@chakra-ui/react';
import {NAVBAR_HEIGHT} from '@/utils/constants';
import NavbarButtons from './NavbarButtons';
import NavbarHeading from './NavbarHeading';

export default function Navbar(): JSX.Element {
  return (
    <Flex
      as={'nav'}
      display={{base: 'flex', lg: 'none'}}
      justify={'space-between'}
      align={'center'}
      pos={'fixed'}
      top={0}
      left={0}
      w={'full'}
      px={4}
      h={NAVBAR_HEIGHT}
      bg={'gray.200'}
    >
      <NavbarHeading />
      <NavbarButtons />
    </Flex>
  );
}
