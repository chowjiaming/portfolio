import {SECTION_PADDING} from '@/utils/constants';
import {Flex, Grid, GridItem} from '@chakra-ui/react';
import {intro, content} from '@/data/portfolio';
import {SectionHeader} from '@/components/Shared/SectionHeader';
import {Meta} from '@/components/Meta';
import {Project} from '@/components/Portfolio/Project';

export default function Portfolio(): JSX.Element {
  return (
    <>
      <Meta page="Home" />
      <Flex
        as="section"
        role="contentinfo"
        p={SECTION_PADDING}
        direction="column"
        minH="100vh"
      >
        <SectionHeader heading={intro.heading} paragraph={intro.paragraph} />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            lg: 'repeat(2, 1fr)',
          }}
          gap={SECTION_PADDING}
        >
          {content.map((project) => (
            <GridItem key={project.title}>
              <Project
                title={project.title}
                description={project.longDesc}
                image={project.image}
                imageAlt={`Screenshot of ${project.title} website`}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
                link={project.link}
                skills={project.skills}
              />
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
