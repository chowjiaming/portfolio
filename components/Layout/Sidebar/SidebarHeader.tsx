import {Button, Flex, Heading, Spacer} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {STANDARD_MARGIN} from '@/utils/constants';
import {sidebarSettings} from '@/utils/settings';

export default function SidebarHeader(): JSX.Element {
  return (
    <Flex
      as={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarSettings.sideVariants}
      flex={'1'}
      h={'full%'}
      w={'full'}
      bg={'gray.300'}
      align={'center'}
    >
      <Heading
        as={motion.h1}
        variants={sidebarSettings.itemVariants}
        ml={STANDARD_MARGIN}
      >
        Joseph Chow
      </Heading>
      <Spacer />
      <Button
        as={motion.button}
        variants={sidebarSettings.itemVariants}
        mr={STANDARD_MARGIN}
      >
        Dark Mode
      </Button>
    </Flex>
  );
}
