import {Avatar, Flex, Heading, Text} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import {footer} from '@/data/sidebar';
import {STANDARD_MARGIN} from '@/utils/constants';
import {sidebarSettings} from '@/utils/settings';

export default function SidebarFooter(): JSX.Element {
  return (
    <Flex
      as={motion.footer}
      initial="closed"
      animate="open"
      exit="closed"
      variants={sidebarSettings.sideVariants}
      flex={'1'}
      h={'full'}
      w={'full'}
      bg={'gray.300'}
      align={'center'}
      justify={'center'}
    >
      <Flex align={'center'}>
        <Avatar
          as={motion.span}
          variants={sidebarSettings.itemVariants}
          name={footer.name}
          src={'/img/avatar.jpg'}
          size="lg"
        />
        <Flex flexDir={'column'} ml={STANDARD_MARGIN}>
          <Heading as={motion.h3} variants={sidebarSettings.itemVariants}>
            {footer.name}
          </Heading>
          <Text
            as={motion.a}
            variants={sidebarSettings.itemVariants}
            href={footer.emailRef}
          >
            {footer.email}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
