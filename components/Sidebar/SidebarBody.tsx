import {Flex} from '@chakra-ui/react';

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
      SidebarBody
    </Flex>
  );
}
