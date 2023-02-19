import {Flex} from '@chakra-ui/react';
import {AnimatePresence, motion} from 'framer-motion';
import {SIDEBAR_WIDTH} from '@/utils/constants';
import {useSidebar} from '@/context/SidebarContext';
import SidebarHeader from '@/Layout/Sidebar/SidebarHeader';
import SidebarBody from '@/Layout/Sidebar/SidebarBody';
import SidebarFooter from '@/Layout/Sidebar/SidebarFooter';

export default function Sidebar(): JSX.Element {
  const {isOpen} = useSidebar();
  return (
    <AnimatePresence>
      {isOpen && (
        <Flex
          as={motion.nav}
          initial={{width: 0}}
          animate={{
            width: 300,
          }}
          exit={{
            width: 0,
            transition: {delay: 0.3, duration: 0.2},
          }}
          flexDir={'column'}
          pos={'fixed'}
          top={0}
          left={0}
          w={SIDEBAR_WIDTH}
          h={'full'}
          zIndex={999}
          _dark={{bg: 'gray.800'}}
        >
          <SidebarHeader />
          <SidebarBody />
          <SidebarFooter />
        </Flex>
      )}
    </AnimatePresence>
  );
}
