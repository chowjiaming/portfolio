import {SECTION_PADDING, SECTION_SPACING} from '@/utils/constants';
import {Flex, Grid} from '@chakra-ui/react';
import {intro, content} from '@/data/contact';
import SectionHeader from '@/components/Shared/SectionHeader';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm/ContactForm';

export default function Contact(): JSX.Element {
  return (
    <Flex
      id={'contact'}
      as="section"
      p={SECTION_PADDING}
      direction="column"
      h="100vh"
    >
      <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={SECTION_SPACING}>
        {content.map((item) => (
          <ContactCard key={item.heading} {...item} />
        ))}
      </Grid>
      <ContactForm />
    </Flex>
  );
}
