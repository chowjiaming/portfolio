import {Box, Flex, Heading} from '@chakra-ui/react';
import {SECTION_PADDING, SECTION_SPACING} from '@/utils/constants';
import {intro} from '@/data/about';
import SectionHeader from '@/components/Shared/SectionHeader';
import AboutSkills from './AboutSkills';
import AboutImages from './AboutImages';

export default function About(): JSX.Element {
  return (
    <Flex
      id={'about'}
      as="section"
      p={SECTION_PADDING}
      h="100vh"
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
      <AboutImages />
    </Flex>
  );
}
