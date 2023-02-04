import {SECTION_PADDING} from '@/utils/constants';
import {Box, Flex} from '@chakra-ui/react';
import {sliderSettings} from '@/utils/settings';
import {intro, content} from '@/data/testimonial';
import Slider from 'react-slick';
import Image from 'next/image';
import SectionHeader from '@/components/Shared/SectionHeader';

export default function Testimonial(): JSX.Element {
  return (
    <Flex
      id={'testimonial'}
      as="section"
      p={SECTION_PADDING}
      direction="column"
      height="100vh"
    >
      <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
      <Slider {...sliderSettings}>
        {content.map((item) => (
          <Box key={item.name} w="full" h="full">
            <Image
              src={item.image}
              alt={item.name}
              width={1000}
              height={1000}
            />
          </Box>
        ))}
      </Slider>
    </Flex>
  );
}
