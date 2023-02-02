import {Box} from '@chakra-ui/react';
import {sidebarWidth} from '@/utils/constants';

export default function Sidebar() {
  return (
    <Box
      display={{base: 'none', lg: 'flex'}}
      position={'fixed'}
      top={0}
      left={0}
      width={sidebarWidth}
      height={'100vh'}
      bg={'gray.200'}
    >
      Sidebar
    </Box>
  );
}
