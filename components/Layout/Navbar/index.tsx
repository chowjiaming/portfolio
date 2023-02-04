import {Box, Button, ButtonGroup, Heading} from '@chakra-ui/react';
import {NAVBAR_HEIGHT} from '@/utils/constants';
import NavbarButtons from './NavbarButtons';
import NavbarHeading from './NavbarHeading';

export default function Navbar(): JSX.Element {
  return (
    <Box
      as={'nav'}
      display={{base: 'flex', lg: 'none'}}
      justifyContent={'space-between'}
      alignItems={'center'}
      position={'fixed'}
      top={0}
      left={0}
      width={'100vw'}
      height={NAVBAR_HEIGHT}
      bg={'gray.200'}
    >
      <NavbarHeading />
      <NavbarButtons />
    </Box>
  );
}
