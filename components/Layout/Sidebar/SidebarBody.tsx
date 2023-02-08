import {Flex, VStack} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {nav} from '@/data/sidebar';
import {sidebarSettings} from '@/utils/settings';
import ScrollspyNav from 'react-scrollspy-nav';
import NavButton from './NavButton';

export default function SidebarBody(): JSX.Element {
  const sections = nav.map((n) => n.itemName.toLowerCase());

  return (
    <Flex
      as={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarSettings.sideVariants}
      flex={'4'}
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
            <NavButton key={main.itemRoute} {...main} />
          ))}
        </VStack>
      </ScrollspyNav>
    </Flex>
  );
}
