import {Box} from '@chakra-ui/react';

export default function Sidebar() {
  return (
    <Box
      display={{base: 'none', lg: 'flex'}}
      position={'fixed'}
      top={0}
      left={0}
      width={80}
      height={'100vh'}
      bg={'gray.100'}
    >
      Sidebar
    </Box>
  );
}
