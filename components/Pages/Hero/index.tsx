import {Box, Button, Flex, Heading, Text, chakra} from '@chakra-ui/react';
import {content} from '@/data/hero';
import {STANDARD_MARGIN} from '@/utils/constants';
import Image from 'next/image';
import ReactTyped from 'react-typed';

export default function Hero(): JSX.Element {
  return (
    <Flex
      id={'home'}
      as="section"
      justify="center"
      align="center"
      direction="column"
      h="100vh"
    >
      <HeroImage>
        <Image
          src={content.heroImage}
          alt="Profile picture"
          width={500}
          height={500}
        />
      </HeroImage>
      <Heading
        as="h1"
        fontSize={{base: '3xl', md: '4xl', lg: '5xl'}}
        fontWeight="extrabold"
        textAlign="center"
        color="gray.900"
        mt={STANDARD_MARGIN}
      >
        Hello, I&apos;m {content.name}
      </Heading>
      <Box>
        <ReactTyped
          loop
          typeSpeed={150}
          backSpeed={60}
          strings={['Front End Developer', 'Photographer']}
          smartBackspace
          shuffle={false}
          backDelay={1}
          fadeOut={false}
          fadeOutDelay={100}
          loopCount={0}
          showCursor
          cursorChar="|"
        />
      </Box>
      <Text>{content.description}</Text>
      <Button as={'a'} variant={'link'} href="/img/profilepic.jpg" download>
        Download CV
      </Button>
    </Flex>
  );
}

const HeroImage = chakra(Box, {
  baseStyle: {
    w: {base: 200, md: 245, lg: 300},
    h: {base: 200, md: 245, lg: 300},
  },
});
