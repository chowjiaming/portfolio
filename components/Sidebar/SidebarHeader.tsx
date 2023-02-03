import {Button, Flex, Heading} from '@chakra-ui/react';
import {STANDARD_MARGIN} from '@/utils/constants';

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
      <Heading as={'h1'} ml={STANDARD_MARGIN}>
        Joseph Chow
      </Heading>
      <Button mr={STANDARD_MARGIN}>Dark Mode</Button>
    </Flex>
  );
}
