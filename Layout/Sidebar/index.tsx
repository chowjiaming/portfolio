import {Flex} from '@chakra-ui/react';
import {useEffect, useRef} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {
  LG_SCREEN_WIDTH,
  SIDEBAR_WIDTH,
  SIDEBAR_WIDTH_MOBILE,
} from '@/utils/constants';
import {useNav} from '@/context';
import {SidebarHeader} from '@/components/Sidebar/SidebarHeader';
import {SidebarBody} from '@/components/Sidebar/SidebarBody';
import {SidebarFooter} from '@/components/Sidebar/SidebarFooter';

export function Sidebar(): JSX.Element {
  const ref = useRef(null);
  const {width, isOpen, onOpen, onClose} = useNav();
  const sidebarWidth =
    width > LG_SCREEN_WIDTH ? SIDEBAR_WIDTH * 4 : SIDEBAR_WIDTH_MOBILE * 4;

  useEffect(() => {
    if (!width) return;
    if (width > LG_SCREEN_WIDTH) onOpen();
    else onClose();
    return () => onClose();
  }, [width, onOpen, onClose]);

  // useOutsideClick({
  //   ref,
  //   handler: () => {
  //     return width < LG_SCREEN_WIDTH && onClose();
  //   },
  // });

  return (
    <AnimatePresence>
      {isOpen && (
        <Flex
          ref={ref}
          as={motion.nav}
          initial={{width: 0}}
          animate={{
            width: sidebarWidth,
          }}
          exit={{
            width: 0,
            transition: {delay: 0.3, duration: 0.2},
          }}
          flexDir="column"
          pos="fixed"
          top="0"
          left="0"
          h="full"
          zIndex="999"
          bg="white"
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
