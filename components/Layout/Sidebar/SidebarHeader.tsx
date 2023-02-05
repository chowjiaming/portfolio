import {Button, Flex, Heading, Spacer} from '@chakra-ui/react';
import {STANDARD_MARGIN} from '@/utils/constants';

export default function SidebarHeader(): JSX.Element {
  return (
    <Flex
      as={'section'}
      flex={'1'}
      h={'full%'}
      w={'full'}
      bg={'gray.300'}
      align={'center'}
    >
      <Heading as={'h1'} ml={STANDARD_MARGIN}>
        Joseph Chow
      </Heading>
      <Spacer />
      <Button mr={STANDARD_MARGIN}>Dark Mode</Button>
    </Flex>
  );
}
