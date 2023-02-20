import {Box, Heading, Text} from '@chakra-ui/react';
import {SECTION_SPACING, STANDARD_MARGIN} from '@/utils/constants';

type SectionHeaderProps = {
  heading: string;
  paragraph: string;
  marginTop?: number;
  marginBottom?: number;
};
export function SectionHeader({
  heading,
  paragraph,
  marginTop,
  marginBottom,
}: SectionHeaderProps): JSX.Element {
  return (
    <Box
      w={{
        base: 'full',
        lg: 'xl',
        xl: '2xl',
        '2xl': '3xl',
      }}
    >
      <Heading
        as={'h1'}
        mt={marginTop ?? SECTION_SPACING}
        mb={marginBottom ?? STANDARD_MARGIN * 2}
      >
        {heading}
      </Heading>
      <Text mb={SECTION_SPACING}>{paragraph}</Text>
    </Box>
  );
}

SectionHeader.displayName = 'SectionHeader';
