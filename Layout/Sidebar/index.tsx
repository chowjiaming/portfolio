import {Flex} from '@chakra-ui/react';
import {useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {SIDEBAR_WIDTH} from '@/utils/constants';
import {useSidebar} from '@/context/SidebarContext';
import {SidebarHeader} from '@/components/Sidebar/SidebarHeader';
import {SidebarBody} from '@/components/Sidebar/SidebarBody';
import {SidebarFooter} from '@/components/Sidebar/SidebarFooter';

export function Sidebar(): JSX.Element {
  const {width, isOpen, onOpen, onClose} = useSidebar();

  useEffect(() => {
    if (!width) return;
    if (width > 992) onOpen();
    else onClose();
    return () => onClose();
  }, [width, onOpen, onClose]);

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
          flexDir="column"
          pos="fixed"
          top="0"
          left="0"
          w={SIDEBAR_WIDTH}
          h="full"
          zIndex="999"
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

Sidebar.displayName = 'Sidebar';
