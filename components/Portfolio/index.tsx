import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SECTION_PADDING,
  SECTION_SPACING,
  STANDARD_MARGIN,
} from '@/utils/constants';
import {Box, Flex, Heading, Text} from '@chakra-ui/react';
import {sliderSettings} from '@/utils/settings';
import {portfolioContent} from '@/data/portfolio';
import Slider from 'react-slick';
import Image from 'next/image';

export default function Portfolio(): JSX.Element {
  return (
    <Flex
      id={'portfolio'}
      as="section"
      p={SECTION_PADDING}
      direction="column"
      height="100vh"
    >
      <Heading as={'h1'} mt={SECTION_SPACING} mb={STANDARD_MARGIN * 2}>
        Portfolio
      </Heading>
      <Text mb={SECTION_SPACING}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        nunc euismod, aliquam nisl nec, ultricies nisl. Nulla facilisi. Donec
        vitae nisl eget nisl aliquam aliquet. Nulla facilisi. Donec vitae nisl
      </Text>
      <Slider {...sliderSettings}>
        {portfolioContent.map((item) => (
          <Box key={item.title} w="full" h="full">
            <Image
              src={item.image}
              alt={item.title}
              width={1000}
              height={1000}
            />
          </Box>
        ))}
      </Slider>
    </Flex>
  );
}
