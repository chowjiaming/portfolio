import {Flex, VStack} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {nav} from '@/data/sidebar';
import {sidebarSettings} from '@/utils/settings';
import ScrollspyNav from 'react-scrollspy-nav';
import {SidebarNavButton} from '@/components/Sidebar/SidebarNavButton';

export function SidebarBody(): JSX.Element {
  const sections = nav.map((n) => n.itemName.toLowerCase());

  return (
    <Flex
      as={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarSettings.sideVariants}
      flex={8}
      h={'full'}
      w={'full'}
      align={'center'}
      justify={'center'}
    >
      <ScrollspyNav
        scrollTargetIds={sections}
        activeNavClass="is-active"
        scrollDuration="100"
      >
        <VStack spacing={8} align="stretch">
          {nav.map((main) => (
            <SidebarNavButton key={main.itemRoute} {...main} />
          ))}
        </VStack>
      </ScrollspyNav>
    </Flex>
  );
}

SidebarBody.displayName = 'SidebarBody';