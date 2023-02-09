import {SECTION_PADDING} from '@/utils/constants';
import {Flex} from '@chakra-ui/react';
import {sliderSettings} from '@/utils/settings';
import {intro, content} from '@/data/portfolio';
import Slider from 'react-slick';
import SectionHeader from '@/components/Shared/SectionHeader';
import Project from './Project';

export default function Portfolio(): JSX.Element {
  return (
    <Flex
      id={'portfolio'}
      as="section"
      p={SECTION_PADDING}
      direction="column"
      minH="100vh"
    >
      <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
      <Slider {...sliderSettings}>
        {content.map((item) => (
          <Project key={item.name} {...item} />
        ))}
      </Slider>
    </Flex>
  );
}
