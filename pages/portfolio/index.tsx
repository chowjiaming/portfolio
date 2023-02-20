import {SECTION_PADDING} from '@/utils/constants';
import {Flex} from '@chakra-ui/react';
import {sliderSettings} from '@/utils/settings';
import {intro, content} from '@/data/portfolio';
import {SectionHeader} from '@/components/Shared/SectionHeader';
import {Project} from '@/components/Portfolio/Project';
import Slider from 'react-slick';

export default function Portfolio(): JSX.Element {
  return (
    <Flex as="section" p={SECTION_PADDING} direction="column" minH="100vh">
      <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
      <Slider {...sliderSettings}>
        {content.map((item) => (
          <Project key={item.name} {...item} />
        ))}
      </Slider>
    </Flex>
  );
}
