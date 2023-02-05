import {Avatar, Flex, Heading, Text} from '@chakra-ui/react';
import {footer} from '@/data/sidebar';
import {STANDARD_MARGIN} from '@/utils/constants';

export default function SidebarFooter(): JSX.Element {
  return (
    <Flex
      as={'footer'}
      flex={'1'}
      h={'full'}
      w={'full'}
      bg={'gray.300'}
      align={'center'}
      justify={'center'}
    >
      <Flex align={'center'}>
        <Avatar name={footer.name} src={'/img/avatar.jpg'} size="lg" />
        <Flex flexDir={'column'} ml={STANDARD_MARGIN}>
          <Heading as={'h3'}>{footer.name}</Heading>
          <Text as={'a'} href={footer.emailRef}>
            {footer.email}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
