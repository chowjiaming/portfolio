import {Avatar, Flex, Heading, Text} from '@chakra-ui/react';
import {footerContent} from '@/data/sidebar';
import {STANDARD_MARGIN} from '@/utils/constants';

export default function SidebarFooter(): JSX.Element {
  return (
    <Flex
      as={'footer'}
      flex={'1'}
      height={'100%'}
      width={'100%'}
      bg={'gray.300'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex alignItems={'center'}>
        <Avatar name={footerContent.name} src={'/img/avatar.jpg'} size="lg" />
        <Flex flexDir={'column'} ml={STANDARD_MARGIN}>
          <Heading as={'h3'}>{footerContent.name}</Heading>
          <Text as={'a'} href={footerContent.emailRef}>
            {footerContent.email}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
