import {Flex, VStack} from '@chakra-ui/react';
import {SECTION_PADDING, SECTION_SPACING} from '@/utils/constants';
import {intro, experience} from '@/data/about';
import {SectionHeader} from '@/components/Shared/SectionHeader';
import {ExperienceCard} from '@/components/Shared/ExperienceCard';
import {AboutSkills} from '@/components/About/AboutSkills';
import {Meta} from '@/components/Meta';

export default function About(): JSX.Element {
  return (
    <>
      <Meta page="About" />
      <Flex
        as="section"
        role="contentinfo"
        p={SECTION_PADDING}
        minH="100vh"
        align={{base: 'flex-start', '2xl': 'center'}}
        direction={{base: 'column', '2xl': 'row'}}
        gap={{
          base: 0,
          xl: SECTION_PADDING,
        }}
      >
        <Flex flex="3" direction={'column'}>
          {intro.map((item) => (
            <SectionHeader key={item.heading} {...item} marginTop={0} />
          ))}
          <AboutSkills />
        </Flex>
        <VStack flex="2" spacing={SECTION_SPACING}>
          {experience.map((item) => (
            <ExperienceCard key={item.company} {...item} />
          ))}
        </VStack>
      </Flex>
    </>
  );
}
