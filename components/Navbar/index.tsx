import {Box} from '@chakra-ui/react';
import {navbarHeight} from '@/utils/constants';

export default function Navbar() {
  return (
    <Box
      display={{base: 'flex', lg: 'none'}}
      position={'fixed'}
      top={0}
      left={0}
      width={'100vw'}
      height={navbarHeight}
      bg={'gray.200'}
    >
      Navbar
    </Box>
  );
}
