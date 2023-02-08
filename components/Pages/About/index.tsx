import {Flex, VStack} from '@chakra-ui/react';
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
      align={{base: 'flex-start', xl: 'center'}}
      direction={{base: 'column', xl: 'row'}}
    >
      <Flex flex={'3'} direction={'column'}>
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
