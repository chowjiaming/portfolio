import {Flex, Heading} from '@chakra-ui/react';

export default function Testimonial(): JSX.Element {
  return (
    <Flex
      id={'testimonial'}
      as="section"
      justifyContent="center"
      alignItems="center"
      direction="column"
      height="100vh"
    >
      <Heading>Testimonial Section</Heading>
    </Flex>
  );
}
