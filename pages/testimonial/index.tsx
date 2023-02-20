import {SECTION_PADDING} from '@/utils/constants';
import {Box, Flex, chakra, shouldForwardProp} from '@chakra-ui/react';
import {sliderSettings} from '@/utils/settings';
import {intro, content} from '@/data/testimonial';
import {SectionHeader} from '@/components/Shared/SectionHeader';
import {Meta} from '@/components/Meta';
import Slider from 'react-slick';
import Image from 'next/image';

export default function Testimonial(): JSX.Element {
  return (
    <>
      <Meta page="Testimonial" />
      <Flex
        as="section"
        role="contentinfo"
        p={SECTION_PADDING}
        direction="column"
        minH="100vh"
      >
        <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
        <Slider {...sliderSettings}>
          {content.map((item) => (
            <Box key={item.name} w="full" h="full" p={SECTION_PADDING}>
              <TestimonialImage
                src={item.image}
                alt={item.name}
                width={1000}
                height={1000}
                css={{
                  height: 'auto',
                  width: 'auto',
                }}
              />
            </Box>
          ))}
        </Slider>
      </Flex>
    </>
  );
}

const TestimonialImage = chakra(Image, {
  shouldForwardProp: (prop) =>
    shouldForwardProp(prop) ||
    prop === 'width' ||
    prop === 'height' ||
    prop === 'alt',
  baseStyle: {
    _hover: {
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease-in-out',
    },
  },
});
