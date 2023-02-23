import {Flex, Heading, Spacer} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {
  NAVBAR_HEIGHT,
  SECTION_PADDING,
  STANDARD_MARGIN,
} from '@/utils/constants';
import {sidebarSettings} from '@/utils/settings';
import {NavbarButtons} from '@/components/Navbar/NavbarButtons';
import {useRouter} from 'next/navigation';

export function Navbar(): JSX.Element {
  const router = useRouter();
  return (
    <Flex
      as="nav"
      display={{base: 'flex', lg: 'none'}}
      align="center"
      pos="fixed"
      top="0"
      left="0"
      w="full"
      pl={SECTION_PADDING}
      pr={STANDARD_MARGIN}
      h={NAVBAR_HEIGHT}
      zIndex="999"
    >
      <Heading
        as={motion.h1}
        variants={sidebarSettings.itemVariants}
        cursor="pointer"
        onClick={() => router.push('/')}
      >
        Joseph Chow
      </Heading>
      <Spacer />
      <NavbarButtons />
    </Flex>
  );
}

Navbar.displayName = 'Navbar';
