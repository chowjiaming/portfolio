import {Box} from '@chakra-ui/react';
import {SIDEBAR_WIDTH} from '@/utils/constants';
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

export default function Sidebar() {
  return (
    <Box
      as={'nav'}
      display={{base: 'none', lg: 'flex'}}
      flexDir={'column'}
      pos={'fixed'}
      top={0}
      left={0}
      w={SIDEBAR_WIDTH}
      h={'100vh'}
      bg={'gray.200'}
    >
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </Box>
  );
}
