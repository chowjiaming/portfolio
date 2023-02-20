import {SECTION_PADDING} from '@/utils/constants';
import {
  Flex,
  // chakra,
  // shouldForwardProp
} from '@chakra-ui/react';
import {intro} from '@/data/testimonial';
import {SectionHeader} from '@/components/Shared/SectionHeader';
import {Meta} from '@/components/Meta';
// import Image from 'next/image';

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
      </Flex>
    </>
  );
}

// const TestimonialImage = chakra(Image, {
//   shouldForwardProp: (prop) =>
//     shouldForwardProp(prop) ||
//     prop === 'width' ||
//     prop === 'height' ||
//     prop === 'alt',
// });
