import {Button, Flex, Heading} from '@chakra-ui/react';

export default function SidebarHeader(): JSX.Element {
  return (
    <Flex
      as={'section'}
      flex={'1'}
      height={'100%'}
      width={'100%'}
      bg={'gray.300'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Heading as={'h1'} ml={4}>
        Joseph Chow
      </Heading>
      <Button mr={4}>Dark Mode</Button>
    </Flex>
  );
}
