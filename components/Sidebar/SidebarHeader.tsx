import {Flex} from '@chakra-ui/react';

export default function SidebarHeader(): JSX.Element {
  return (
    <Flex
      as={'section'}
      flex={'1'}
      height={'100%'}
      width={'100%'}
      bg={'gray.300'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      Sidebar Header
    </Flex>
  );
}
