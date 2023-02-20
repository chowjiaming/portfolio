import {Grid, GridItem, Heading, Progress} from '@chakra-ui/react';
import {content} from '@/data/skills';
import {SECTION_SPACING, STANDARD_MARGIN} from '@/utils/constants';

export function AboutSkills(): JSX.Element {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(2, 1fr)',
        lg: 'repeat(1, 1fr)',
        xl: 'repeat(2, 1fr)',
      }}
      w={{
        base: 'full',
        lg: 'xl',
        xl: '2xl',
        '2xl': '3xl',
      }}
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
  );
}

AboutSkills.displayName = 'AboutSkills';
