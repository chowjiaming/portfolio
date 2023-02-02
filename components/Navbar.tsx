import {Box} from '@chakra-ui/react';

export default function Navbar() {
  return (
    <Box
      display={{base: 'flex', lg: 'none'}}
      position={'fixed'}
      top={0}
      left={0}
      width={'100vw'}
      height={16}
      bg={'gray.100'}
    >
      Navbar
    </Box>
  );
}
