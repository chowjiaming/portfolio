import {Box} from '@chakra-ui/react';
import {sidebarWidth} from '@/utils/constants';
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';

export default function Sidebar() {
  return (
    <Box
      display={{base: 'none', lg: 'flex'}}
      flexDir={'column'}
      position={'fixed'}
      top={0}
      left={0}
      width={sidebarWidth}
      height={'100vh'}
      bg={'gray.200'}
    >
      <SidebarHeader />
      <SidebarBody />
      <SidebarFooter />
    </Box>
  );
}
