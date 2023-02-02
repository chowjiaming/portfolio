import {Button, Flex, VStack, chakra} from '@chakra-ui/react';
import {mainContent} from '@/data/sidebar';
import Image from 'next/image';
import ScrollspyNav from 'react-scrollspy-nav';

export default function SidebarBody(): JSX.Element {
  return (
    <Flex
      as={'section'}
      flex={'4'}
      height={'100%'}
      width={'100%'}
      bg={'gray.300'}
      alignItems={'center'}
      justifyContent={'center'}
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
          {mainContent.map((main) => (
            <SidebarNavButton
              key={main.itemRoute}
              as={'a'}
              href={main.itemRoute}
              variant={'link'}
            >
              <Image
                src={`svg/${main.icon}.svg`}
                alt={main.itemName}
                width={20}
                height={20}
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
    gap: 4,
    '&.is-active': {
      color: 'red.500',
    },
  },
});