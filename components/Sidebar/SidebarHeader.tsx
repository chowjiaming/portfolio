import {Flex, Heading} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {LG_SCREEN_WIDTH, SECTION_PADDING} from '@/utils/constants';
import {sidebarSettings} from '@/utils/settings';
import {ColorModeToggle} from '@/components/Shared/ColorModeToggle';
import {useSidebar} from '@/context/SidebarContext';
import {useRouter} from 'next/navigation';

export function SidebarHeader(): JSX.Element {
  const router = useRouter();
  const {width} = useSidebar();
  return (
    <Flex
      as={motion.div}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarSettings.sideVariants}
      flex="1"
      h="full"
      w="full"
      justify="space-between"
      align="center"
      p={SECTION_PADDING}
    >
      <Heading
        as={motion.h1}
        variants={sidebarSettings.itemVariants}
        cursor="pointer"
        onClick={() => router.push('/')}
      >
        Joseph <br /> Chow
      </Heading>
      {width > LG_SCREEN_WIDTH && <ColorModeToggle />}
    </Flex>
  );
}

SidebarHeader.displayName = 'SidebarHeader';
