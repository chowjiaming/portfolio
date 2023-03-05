import {Flex, VStack} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {nav} from '@/data/sidebar';
import {sidebarMotion} from '@/utils/motion';
import {SidebarNavButton} from '@/components/Sidebar/SidebarNavButton';
import {LARGE_MARGIN, SECTION_PADDING} from '@/utils/constants';

export function SidebarBody(): JSX.Element {
  return (
    <Flex
      as={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarMotion.sideVariants}
      flex="8"
      h="full"
      w="full"
      align="center"
      justify="center"
    >
      <VStack
        spacing={{
          base: LARGE_MARGIN,
          lg: SECTION_PADDING,
        }}
        align="stretch"
      >
        {nav.map((main) => (
          <SidebarNavButton key={main.itemRoute} {...main} />
        ))}
      </VStack>
    </Flex>
  );
}

SidebarBody.displayName = 'SidebarBody';
