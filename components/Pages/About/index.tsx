import {Box, Flex, Heading, VStack} from '@chakra-ui/react';
import {SECTION_PADDING, SECTION_SPACING} from '@/utils/constants';
import {intro, experience} from '@/data/about';
import SectionHeader from '@/components/Shared/SectionHeader';
import ExperienceCard from '@/components/Shared/ExperienceCard';
import AboutSkills from './AboutSkills';

export default function About(): JSX.Element {
  return (
    <Flex
      id={'about'}
      as="section"
      p={SECTION_PADDING}
      minH="100vh"
      direction={{base: 'column', lg: 'row'}}
      gap={SECTION_PADDING}
    >
      <Flex flex={'3'} direction={'column'}>
        <Box mb={SECTION_SPACING}>
          <Heading as={'h1'}>About Me</Heading>
        </Box>
        {intro.map((item) => (
          <SectionHeader key={item.heading} {...item} marginTop={0} />
        ))}
        <AboutSkills />
      </Flex>
      <VStack flex={'2'} spacing={SECTION_SPACING}>
        {experience.map((item) => (
          <ExperienceCard key={item.company} {...item} />
        ))}
      </VStack>
    </Flex>
  );
}
