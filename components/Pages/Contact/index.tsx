import {SECTION_PADDING} from '@/utils/constants';
import {Flex, Grid} from '@chakra-ui/react';
import {intro, content} from '@/data/contact';
import SectionHeader from '@/components/Shared/SectionHeader';
import ContactInfo from './ContactInfo';

export default function Contact(): JSX.Element {
  return (
    <Flex
      id={'contact'}
      as="section"
      p={SECTION_PADDING}
      direction="column"
      height="100vh"
    >
      <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {content.map((item) => (
          <ContactInfo key={item.heading} {...item} />
        ))}
      </Grid>
    </Flex>
  );
}
