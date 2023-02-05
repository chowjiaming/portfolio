import {Box, Heading, Text} from '@chakra-ui/react';
import {SECTION_SPACING, STANDARD_MARGIN} from '@/utils/constants';

type SectionHeaderProps = {
  heading: string;
  paragraph: string;
};
export default function SectionHeader({
  heading,
  paragraph,
}: SectionHeaderProps): JSX.Element {
  return (
    <Box
      w={{
        base: '100%',
        lg: '2xl',
      }}
    >
      <Heading as={'h1'} mt={SECTION_SPACING} mb={STANDARD_MARGIN * 2}>
        {heading}
      </Heading>
      <Text mb={SECTION_SPACING}>{paragraph}</Text>
    </Box>
  );
}
