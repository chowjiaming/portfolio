import {Button, Flex, VStack, chakra} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {useSidebar} from '@/context/SidebarContext';
import {nav} from '@/data/sidebar';
import {sidebarSettings} from '@/utils/settings';
import {STANDARD_MARGIN} from '@/utils/constants';
import Image from 'next/image';
import ScrollspyNav from 'react-scrollspy-nav';

export default function SidebarBody(): JSX.Element {
  const {onToggle} = useSidebar();
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
      bg={'gray.300'}
      align={'center'}
      justify={'center'}
    >
      <ScrollspyNav
        scrollTargetIds={[
          'home',
          'about',
          'portfolio',
          'testimonial',
          'contact',
        ]}
        activeNavClass="is-active"
        offset={0}
        scrollDuration="100"
      >
        <VStack spacing={8} align="stretch">
          {nav.map((main) => (
            <SidebarNavButton
              key={main.itemRoute}
              as={motion.a}
              whileHover={{scale: 1.1}}
              variants={sidebarSettings.itemVariants}
              href={main.itemRoute}
              variant={'link'}
              onClick={onToggle}
            >
              <Image
                src={`svg/${main.icon}.svg`}
                alt={main.itemName}
                width={20}
                height={20}
                style={{
                  width: 'auto',
                  height: 'auto',
                }}
              />
              {main.itemName}
            </SidebarNavButton>
          ))}
        </VStack>
      </ScrollspyNav>
    </Flex>
  );
}

const SidebarNavButton = chakra(Button, {
  baseStyle: {
    display: 'flex',
    gap: STANDARD_MARGIN,
    '&.is-active': {
      color: 'red.500',
    },
  },
});
