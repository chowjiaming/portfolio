import {SECTION_PADDING} from '@/utils/constants';
import {Flex} from '@chakra-ui/react';
import {intro} from '@/data/portfolio';
import {SectionHeader} from '@/components/Shared/SectionHeader';
import {Meta} from '@/components/Meta';
import {ProjectTabs} from '@/components/Portfolio/ProjectTabs';

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Meta page="Home" />
      <Flex
        as="section"
        role="contentinfo"
        p={SECTION_PADDING}
        direction="column"
        minH="100vh"
      >
        <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
        <ProjectTabs />
      </Flex>
    </>
  );
}
