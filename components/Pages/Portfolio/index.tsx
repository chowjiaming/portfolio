import {SECTION_PADDING} from '@/utils/constants';
import {Box, Flex, Tooltip, chakra, shouldForwardProp} from '@chakra-ui/react';
import {sliderSettings} from '@/utils/settings';
import {intro, content} from '@/data/portfolio';
import Slider from 'react-slick';
import Image from 'next/image';
import SectionHeader from '@/components/Shared/SectionHeader';

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
          <Box key={item.title} w="full" h="full" p={SECTION_PADDING}>
            <Tooltip label={item.title} aria-label={item.title}>
              <PortfolioImage
                src={item.image}
                alt={item.title}
                width={1000}
                height={1000}
                css={{
                  height: 'auto',
                  width: 'auto',
                }}
              />
            </Tooltip>
          </Box>
        ))}
      </Slider>
    </Flex>
  );
}

const PortfolioImage = chakra(Image, {
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
