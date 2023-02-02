import {Flex, Heading} from '@chakra-ui/react';

export default function Portfolio(): JSX.Element {
  return (
    <Flex
      as="section"
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100vh"
    >
      <Heading>Portfolio Section</Heading>
    </Flex>
  );
}
