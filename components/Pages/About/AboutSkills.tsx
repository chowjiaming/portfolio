import {Button, Grid, GridItem, Heading, Progress} from '@chakra-ui/react';
import {content} from '@/data/skills';
import {SECTION_SPACING, STANDARD_MARGIN} from '@/utils/constants';

export default function AboutSkills(): JSX.Element {
  return (
    <>
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={STANDARD_MARGIN}
        mb={SECTION_SPACING}
      >
        {content.map((skill) => {
          return (
            <GridItem key={skill.name}>
              <Heading as={'h3'} mb={2} fontSize="xl">
                {skill.name}
              </Heading>
              <Progress value={skill.value} />
            </GridItem>
          );
        })}
      </Grid>
      <Button maxW={'fit-content'}>See More</Button>
    </>
  );
}
