import {Flex, Heading} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {SECTION_PADDING} from '@/utils/constants';
import {sidebarSettings} from '@/utils/settings';
import {ColorModeToggle} from '@/components/Shared/ColorModeToggle';

export function SidebarHeader(): JSX.Element {
  return (
    <Flex
      as={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarSettings.sideVariants}
      flex={'1'}
      h={'full'}
      w={'full'}
      justify={'space-between'}
      align={'center'}
      p={SECTION_PADDING}
    >
      <Heading
        as={motion.h1}
        variants={sidebarSettings.itemVariants}
        noOfLines={0}
      >
        Joseph <br /> Chow
      </Heading>
      <ColorModeToggle />
    </Flex>
  );
}
