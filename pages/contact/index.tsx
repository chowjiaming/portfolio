import {SECTION_PADDING, SECTION_SPACING} from '@/utils/constants';
import {Flex, Grid} from '@chakra-ui/react';
import {intro, content} from '@/data/contact';
import {SectionHeader} from '@/components/Shared/SectionHeader';
import ContactCard from '@/components/Contact/ContactCard';
import ContactForm from '@/components/Contact/ContactForm/ContactForm';

export default function Contact(): JSX.Element {
  return (
    <Flex
      id={'contact'}
      as="section"
      p={SECTION_PADDING}
      direction="column"
      minH="100vh"
    >
      <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          lg: 'repeat(2, 1fr)',
          xl: 'repeat(3, 1fr)',
        }}
        gap={6}
        mb={SECTION_SPACING}
      >
        {content.map((item) => (
          <ContactCard key={item.heading} {...item} />
        ))}
      </Grid>
      <ContactForm />
    </Flex>
  );
}
