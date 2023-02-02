import {Flex, Heading} from '@chakra-ui/react';

export default function Contact(): JSX.Element {
  return (
    <Flex
      as="section"
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100vh"
    >
      <Heading>Contact Section</Heading>
    </Flex>
  );
}
