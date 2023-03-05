import {Avatar, Flex, Heading, Text} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {footer} from '@/data/sidebar';
import {STANDARD_MARGIN} from '@/utils/constants';
import {sidebarMotion} from '@/utils/motion';

export function SidebarFooter(): JSX.Element {
  return (
    <Flex
      as={motion.footer}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarMotion.sideVariants}
      flex="2"
      h="full"
      w="full"
      align="center"
      justify="center"
    >
      <Flex
        align={{
          base: 'flex-start',
          lg: 'center',
        }}
        direction={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Avatar
          as={motion.span}
          variants={sidebarMotion.itemVariants}
          name={footer.name}
          src="/img/avatar.jpg"
          size={{
            base: 'md',
            lg: 'lg',
          }}
        />
        <Flex
          flexDir="column"
          ml={{
            base: 0,
            lg: STANDARD_MARGIN,
          }}
          mb={{
            base: STANDARD_MARGIN,
            lg: 0,
          }}
        >
          <Heading
            as={motion.h3}
            variants={sidebarMotion.itemVariants}
            size={{
              base: 'lg',
              lg: 'xl',
            }}
          >
            {footer.name}
          </Heading>
          <Text
            as={motion.a}
            variants={sidebarMotion.itemVariants}
            href={footer.emailRef}
          >
            {footer.email}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

SidebarFooter.displayName = 'SidebarFooter';
