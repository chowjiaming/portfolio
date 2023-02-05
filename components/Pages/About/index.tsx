import {Box, Flex, Heading, Text} from '@chakra-ui/react';
import {
  SECTION_PADDING,
  SECTION_SPACING,
  STANDARD_MARGIN,
} from '@/utils/constants';
import AboutSkills from './AboutSkills';
import AboutImages from './AboutImages';

export default function About(): JSX.Element {
  return (
    <Flex
      id={'about'}
      as="section"
      p={SECTION_PADDING}
      h="100vh"
      gap={SECTION_PADDING}
    >
      <Flex flex={'3'} flexDir={'column'}>
        <Box mb={SECTION_SPACING}>
          <Heading as={'h1'}>About Me</Heading>
        </Box>
        <Box mb={SECTION_SPACING}>
          <Heading as={'h2'} pb={STANDARD_MARGIN}>
            Hi, I&apos;m{' '}
            <Text as={'span'} color={'primary'}>
              Joseph Chow
            </Text>
          </Heading>
          <Text>
            I&apos;m a software engineer based in Toronto, Canada. I specialize
            in building (and occasionally designing) exceptional websites,
            applications, and everything in between.
          </Text>
        </Box>
        <Box mb={SECTION_SPACING}>
          <Heading as={'h2'} pb={STANDARD_MARGIN}>
            What are my skills?
          </Heading>
          <Text>
            I&apos;m a full stack developer with a passion for building
            beautiful, intuitive, and performant web applications. I&apos;m also
            a photographer and a graphic designer.
          </Text>
        </Box>
        <AboutSkills />
      </Flex>
      <AboutImages />
    </Flex>
  );
}
