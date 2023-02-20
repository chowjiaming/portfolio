import {Flex, VStack} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {nav} from '@/data/sidebar';
import {sidebarSettings} from '@/utils/settings';
import {SidebarNavButton} from '@/components/Sidebar/SidebarNavButton';
import {SECTION_PADDING} from '@/utils/constants';

export function SidebarBody(): JSX.Element {
  return (
    <Flex
      as={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarSettings.sideVariants}
      flex="8"
      h="full"
      w="full"
      align="center"
      justify="center"
    >
      <VStack spacing={SECTION_PADDING} align="stretch">
        {nav.map((main) => (
          <SidebarNavButton key={main.itemRoute} {...main} />
        ))}
      </VStack>
    </Flex>
  );
}

SidebarBody.displayName = 'SidebarBody';
