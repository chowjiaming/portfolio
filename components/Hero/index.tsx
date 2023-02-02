import {Flex, Heading} from '@chakra-ui/react';

export default function Hero(): JSX.Element {
  return (
    <Flex
      id={'home'}
      as="section"
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100vh"
    >
      <Heading>Hero Section</Heading>
    </Flex>
  );
}
