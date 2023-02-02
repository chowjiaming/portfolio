import {Flex} from '@chakra-ui/react';

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
      SidebarFooter
    </Flex>
  );
}
