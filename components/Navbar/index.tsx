import {Box, Button, ButtonGroup, Heading} from '@chakra-ui/react';
import {navbarHeight} from '@/utils/constants';
import NavbarButtons from './NavbarButtons';
import NavbarHeading from './NavbarHeading';

export default function Navbar(): JSX.Element {
  return (
    <Box
      display={{base: 'flex', lg: 'none'}}
      justifyContent={'space-between'}
      alignItems={'center'}
      position={'fixed'}
      top={0}
      left={0}
      width={'100vw'}
      height={navbarHeight}
      bg={'gray.200'}
    >
      <NavbarHeading />
      <NavbarButtons />
    </Box>
  );
}
