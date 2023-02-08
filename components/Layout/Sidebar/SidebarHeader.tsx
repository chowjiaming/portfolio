import {Flex, Heading} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {STANDARD_MARGIN} from '@/utils/constants';
import {sidebarSettings} from '@/utils/settings';
import ColorModeToggle from '@/components/Shared/ColorModeToggle';

export default function SidebarHeader(): JSX.Element {
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
      direction={'column'}
      justify={'center'}
      align={'center'}
      gap={STANDARD_MARGIN}
    >
      <Heading as={motion.h1} variants={sidebarSettings.itemVariants}>
        Joseph Chow
      </Heading>
      <ColorModeToggle />
    </Flex>
  );
}
